import { format } from 'date-fns';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
    const currentYear = format(new Date(), 'yyyy');

    return (
        <footer className="footer footer-center p-10 bg-violet-950 text-primary-content">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50" fill="black" />
                    <circle cx="50" cy="50" r="40" fill="white" />
                    <g transform="translate(50, 50)">
                        <g transform="rotate(30)">
                            <polygon points="0,-20 -17.32,10 -8.66,30 8.66,30 17.32,10" fill="black" />
                        </g>
                        <g transform="rotate(90)">
                            <polygon points="0,-20 -17.32,10 -8.66,30 8.66,30 17.32,10" fill="black" />
                        </g>
                        <g transform="rotate(150)">
                            <polygon points="0,-20 -17.32,10 -8.66,30 8.66,30 17.32,10" fill="black" />
                        </g>
                        <g transform="rotate(210)">
                            <polygon points="0,-20 -17.32,10 -8.66,30 8.66,30 17.32,10" fill="black" />
                        </g>
                        <g transform="rotate(270)">
                            <polygon points="0,-20 -17.32,10 -8.66,30 8.66,30 17.32,10" fill="black" />
                        </g>
                        <g transform="rotate(330)">
                            <polygon points="0,-20 -17.32,10 -8.66,30 8.66,30 17.32,10" fill="black" />
                        </g>
                    </g>
                </svg>

                <p className="font-bold">
                    Elite Sports Camp<br />Unleash Your Skills, Embrace the Summer
                </p>
                <small>EAC ©{currentYear} - All rights reserved</small>
            </div>
            <div className="grid grid-flow-col gap-4 text-xl">
                <a target='_blank' rel='noreferrer' href="https://www.facebook.com">
                    <AiFillFacebook className='text-blue-500' />
                </a>
                <a target='_blank' rel='noreferrer' href="https://www.instagram.com">
                    <AiFillInstagram className='text-rose-500' />
                </a>
                <a target='_blank' rel='noreferrer' href="https://www.youtube.com">
                    <AiFillYoutube className='text-red-500' />
                </a>
            </div>
        </footer>
    );
};

export default Footer;