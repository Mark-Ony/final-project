//main server file  template
import express, { Application } from 'express';
import connectDB from './config/database';
import cors from 'cors';
import productRoutes from './routes/products';

const app: Application = express();
app.use(cors());

connectDB();

//product routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);   
});