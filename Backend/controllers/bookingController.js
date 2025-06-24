import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body);
    try {
        const savedBooking = await newBooking.save();
        res
            .status(200)
            .json({
                success: true, 
                message: "Đặt tour thành công", 
                data: savedBooking
            });
    } catch (err) {
         console.error("Booking error:", err);
        res
            .status(500)
            .json({
                success: false,
                message: "Đặt tour thất bại",
            });
    }
};

export const getBooking = async (req, res) => {
    const id = req.params.id;
    try {
        const book = await Booking.findById(id);

        res
            .status(200)
            .json({
                success: true,
                message: "Lấy thông tin đặt tour thành công",
                data: book
            });
    } catch (err) {
        res
            .status(404)
            .json({
                success: false,
                message: "Lấy thông tin đặt tour thất bại",
            });
    }
}

export const getAllBooking = async (req, res) => {
    try {
        const books = await Booking.find();

        res
            .status(200)
            .json({
                success: true,
                message: "Lấy thông tin đặt tour thành công",
                data: books
            });
    } catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: "Lấy thông tin đặt tour thất bại",
            });
    }
}