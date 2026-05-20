import { verifyOTP } from '@/api/bhcApi';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';

export const useVerifyOTP = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: (formData: FormData) => verifyOTP(formData),
        onSuccess: (data) => {
            console.log('OTP verified successfully', data);
            router.push("/login");
        },
        onError: (error: any) => {
            console.log('OTP verification failed', error.response?.data);
            alert(error.response?.data?.message || "OTP verification failed");
        },
    });
};