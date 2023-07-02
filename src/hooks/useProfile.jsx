import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useProfile = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: userDetails = [] } = useQuery({
        queryKey: ['userDetails', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/users?email=${user?.email}`);
            return res.data;
        }
    })
    return [userDetails];
};

export default useProfile;