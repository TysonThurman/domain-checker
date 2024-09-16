import express from 'express';
import cors from 'cors';
import getResponseBody from '../utils/getResponseBody.js';
import logger from '../config/logger.js';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
    logger.info('Handling test request', { path: req.path });
    res.json({ message: 'Hello from Express!' });
});

app.get('/api/:domain', async (req, res) => {
    logger.info('Handling request', { path: req.path });
    const domain = req.params.domain;
    getResponseBody(domain)
       .then(body => {
            res.json(body);
        })
       .catch(error => {
            logger.error('Error', {error})
            res.status(500).json({ error: error.message });
        });
})

app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});