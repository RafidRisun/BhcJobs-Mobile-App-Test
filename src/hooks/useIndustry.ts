import { fetchIndustry } from '@/api/bhcApi';
import { useQuery } from '@tanstack/react-query';

export const useIndustry = () => {
    return useQuery({
        queryKey: ['industry'],
        queryFn: fetchIndustry,
        staleTime: 1000 * 60 * 10,
    });
};