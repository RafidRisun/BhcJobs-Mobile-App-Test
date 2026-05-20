import { fetchCompany } from '@/api/bhcApi';
import { useQuery } from '@tanstack/react-query';

export const useCompany = () => {
    return useQuery({
        queryKey: ['company'],
        queryFn: fetchCompany,
        staleTime: 1000 * 60 * 5,
    });
};