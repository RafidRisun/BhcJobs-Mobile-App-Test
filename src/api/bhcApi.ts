import axiosClient from './axiosClient';


export const fetchJobs = async () => {
    const response = await axiosClient.get('/job/get');
    return response.data;
};


export const registerJobSeeker = async (formData: FormData) => {
    const response = await axiosClient.post('/api/job_seeker/register', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    if (response.data.status === false) {
        throw new Error(response.data.message);
    }
    return response.data;
};

export const verifyOTP = async (formData: FormData) => {
    const response = await axiosClient.post('/api/job_seeker/phone_verify', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    if (response.data.status === false) {
        throw new Error(response.data.message);
    }
    return response.data;
};