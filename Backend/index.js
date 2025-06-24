import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import tourRoute from './routes/tours.js';
import userRoute from './routes/user.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/booking.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: true,
    credentials: true, 
};

// Kết nối đến MongoDB
mongoose.set("strictQuery", false); 
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Kết nối đến MongoDB thành công");        
    } catch (err) {
        console.log("Lỗi kết nối đến MongoDB:");
    }
};

// for testing
app.get("/", (req, res) => {
    res.send("API đang hoạt động");
});

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

app.listen(port, () => {
    connectDB();
    console.log(`Máy chủ lắng nghe trên cổng`, port);
});