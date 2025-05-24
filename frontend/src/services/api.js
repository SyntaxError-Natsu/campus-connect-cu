import axios from 'axios';

const API_BASE_URL = '/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export const authAPI = {
    register: (userData) => api.post('/auth/register', userData),
    login: (credentials) => api.post('/auth/login', credentials),
};

export const postsAPI = {
    getAllPosts: () => api.get('/posts'),
    createPost: (postData) => api.post('/posts', postData),
    likePost: (postId) => api.post(`/posts/${postId}/like`),
    addComment: (postId, comment) => api.post(`/posts/${postId}/comments`, comment),
    getComments: (postId) => api.get(`/posts/${postId}/comments`),
};

export const resourcesAPI = {
    getAllResources: () => api.get('/resources'),
    createResource: (resourceData) => api.post('/resources', resourceData),
    downloadResource: (resourceId) => api.get(`/resources/${resourceId}/download`),
};

export default api;
