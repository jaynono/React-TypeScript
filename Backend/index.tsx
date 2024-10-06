import express from 'express';
import cors from 'cors';
import connectDB from './src/config/db';
import authRoutes from './src/routes/auth';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

// Connect to MongoDB
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
