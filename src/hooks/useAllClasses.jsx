import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAllClasses = () => {
    const { loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: allClasses = [], refetch } = useQuery({
        queryKey: ['allClasses'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/classes`);
            return res.data;
        }
    })
    return [allClasses, refetch];
};

export default useAllClasses;