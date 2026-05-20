import axiosClient from './axiosClient';

// GET all jobs
export const fetchJobs = async () => {
    const response = await axiosClient.get('/job/get');
    return response.data;
};

// POST register job seeker (form-data)
export const registerJobSeeker = async (formData: FormData) => {
    const response = await axiosClient.post('/api/job_seeker/register', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};