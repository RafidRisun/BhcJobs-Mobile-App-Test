import { registerJobSeeker } from '@/api/bhcApi';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';


export const useRegisterJobSeeker = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (formData: FormData) => registerJobSeeker(formData),
    onSuccess: (data) => {
      console.log('Registered successfully', data);
      router.push({
        pathname: "/otp",
        params: { phone: data.data.phone },
      });
    },
    onError: (error: any) => {
      console.log('Registration failed', error.response?.data);
    },
  });
};