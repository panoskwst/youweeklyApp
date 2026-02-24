import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const fetchPosts = async () => {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    return response.data;
};