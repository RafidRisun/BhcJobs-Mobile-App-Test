import { loginJobSeeker } from '@/api/bhcApi';
import { saveToken } from '@/utils/tokenStorage';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';

export const useLoginJobSeeker = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: (formData: FormData) => loginJobSeeker(formData),
        onSuccess: async (data) => {
            console.log('Job seeker logged in successfully', data);
            await saveToken(data.data.token);
            router.replace("/home");
        },
        onError: (error: any) => {
            console.log('Login failed', error.response?.data);
            alert(error.response?.data?.message || "Login failed");
        },
    });
};