const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

const WP_BASE_URL = 'https://www.youweekly.gr/wp-json/wp/v2/posts';

app.get('/posts', async (req, res) =>{
    try {
        const response = await axios.get(`${WP_BASE_URL}/POSTS`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http:localhost:${PORT}`);
});