import { registerJobSeeker } from '@/api/bhcApi';
import { useMutation } from '@tanstack/react-query';

export const useRegisterJobSeeker = () => {
  return useMutation({
    mutationFn: (formData: FormData) => registerJobSeeker(formData),
    onSuccess: (data) => {
      console.log('Registered successfully', data);
    },
    onError: (error: any) => {
      console.log('Registration failed', error.response?.data);
    },
  });
};