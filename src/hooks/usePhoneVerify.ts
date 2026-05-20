import { verifyOTP } from '@/api/bhcApi';
import { saveToken } from '@/utils/tokenStorage';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';

export const useVerifyOTP = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: (formData: FormData) => verifyOTP(formData),
        onSuccess: async (data) => {
            console.log('OTP verified successfully', data);
            await saveToken(data.data.token);
            router.replace("/login");
        },
        onError: (error: any) => {
            console.log('OTP verification failed', error.response?.data);
            alert(error.response?.data?.message || "OTP verification failed");
        },
    });
};