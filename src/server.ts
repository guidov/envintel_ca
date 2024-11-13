const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const contactRouter = require('./api/contact');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api', contactRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
