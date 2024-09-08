import express from 'express';
import cors from 'cors';
import getResponseBody from '../utils/getResponseBody.js';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Example API endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.get('/api/:domain', (req, res) => {
    const domain = req.params.domain;
    console.log(domain);
    // getResponseBody(domain)
    //    .then(body => {
    //         res.json({ domain, body });
    //     })
    //    .catch(error => {
    //         res.status(500).json({ error: error.message });
    //     });
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});