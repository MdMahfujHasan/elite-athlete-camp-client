import { useQuery } from "@tanstack/react-query";

const useDetailedClasses = () => {
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://elite-athlete-camp-server.vercel.app/detailed-classes');
            return res.json();
        }
    })
    return [classes, refetch];
};

export default useDetailedClasses;