import server from './src/server/index.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`[SERVER ON]: Running on http://localhost:${port}/api`)
})