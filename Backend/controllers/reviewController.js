import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
    const tourId = req.params.tourId;
    const newReview = new Review({ ...req.body });
    try {
        const savedReview = await newReview.save();
        await Tour.findByIdAndUpdate(tourId, {
            $push: { reviews: savedReview._id }
        })
        res.status(200).json({success: true, message: "Đánh giá đã được tạo thành công", data: savedReview});
    } catch (err) {
        res.status(500).json({success: false, message: "Lỗi khi tạo đánh giá"});
    }
}