import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRouter from './api/contact';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api', contactRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
