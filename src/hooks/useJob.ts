import { fetchJob } from '@/api/bhcApi';
import { useQuery } from '@tanstack/react-query';

export const useJob = () => {
    return useQuery({
        queryKey: ['jobs'],
        queryFn: fetchJob,
        staleTime: 1000 * 60 * 5,
    });
};