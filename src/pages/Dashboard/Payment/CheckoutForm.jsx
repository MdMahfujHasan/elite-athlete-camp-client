import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { format } from 'date-fns'

const CheckoutForm = ({ cart, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const currentDate = format(new Date(), 'MM/dd/yyyy');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    }
                }
            }
        );

        if (confirmError) {
            console.log(confirmError)
        }

        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                name: user?.displayName,
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: currentDate,
                status: 'service pending',
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                courseNames: cart.map(item => item.courseName)
            }
            axiosSecure.post('/payment', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult.insertedId) {
                        // confirm
                    }
                })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="w-1/2 mx-auto bg-base-200 p-14 mt-4">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    type="submit"
                    className="btn btn-accent btn-xs text-white mt-2.5"
                    disabled={!stripe || !clientSecret || processing}>Pay Now
                </button>
            </form>
            {cardError && <p className="text-red-400 text-sm font-medium text-center mt-1">{cardError}</p>}
            {transactionId && <p className="text-green-400 text-center mt-1"><small>Transaction completed with transaction ID: <span className="text-blue-400">{transactionId}</span></small></p>}
        </>
    );
};

export default CheckoutForm;