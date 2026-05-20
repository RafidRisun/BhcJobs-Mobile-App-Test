import axiosClient from './axiosClient';


export const fetchIndustry = async () => {
    const response = await axiosClient.get('/api/industry/get');
    return response.data;
};

export const fetchJob = async () => {
    const response = await axiosClient.get('/api/job/get');
    return response.data;
};

export const fetchCompany = async () => {
    const response = await axiosClient.get('/api/company/get');
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

export const loginJobSeeker = async (formData: FormData) => {
    const response = await axiosClient.post('/api/job_seeker/login', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    if (response.data.status === false) {
        throw new Error(response.data.message);
    }
    return response.data;
};