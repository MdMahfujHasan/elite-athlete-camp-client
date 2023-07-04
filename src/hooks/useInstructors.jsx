import { useEffect, useState } from 'react';

const useInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://elite-athlete-camp-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return [instructors];
};

export default useInstructors;