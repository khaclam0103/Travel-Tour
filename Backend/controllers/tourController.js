import Tour from '../models/Tour.js';


// create new Tour
export const createTour = async (req, res) => {

    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();

        res.status(200)
        .json({
            success: true,
            message: 'Successfully created',
            data: savedTour,
        });
    } catch (err) {
        res
        .status(200)
        .json({
            success: false,
            message: 'Failed to create. Try again',
        });
    }
}

// update Tour
export const updateTour = async (req, res) => {

    const id = req.params.id;

    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body,
        }, { new: true });

        res.status(200).json({
            success: true,
            message: 'Successfully updated',
            data: updatedTour,
        });
    } catch (err) {
        res.status(500).json({
                success: false,
            message: 'Failed to update. Try again',
        });
    }
};

// delete Tour
export const deleteTour = async (req, res) => {
    const id = req.params.id;

    try {
        await Tour.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: 'Successfully deleted',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete. Try again',
        });
    }
};

// getSingle Tour
export const getSingleTour = async (req, res) => {
    const id = req.params.id;

    try {
        const tour = await Tour.findById(id).populate("reviews");

        res.status(200).json({
            success: true,
            message: 'Successfully deleted',
            data: tour,
        });
             
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Not found',
        });
    }
};

// getAll Tour
export const getAllTour = async (req, res) => {
    const page = parseInt(req.query.page);
    try {
        const tours = await Tour.find({})
        .populate("reviews")
        .skip(page * 8)
        .limit(8);

        res.status(200).json({
            success: true,
            count: tours.length,
            message: 'Successfully',
            data: tours,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Not found',
        });
    }
};

// get tour by search
export const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try {
        const tours = await Tour.find({
            city,
            distance: { $gte: distance },
            maxGroupSize: { $gte: maxGroupSize },
        }).populate("reviews");

        res.status(200).json({
            success: true,
            message: 'Successfully',
            data: tours,
        });
    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: 'Not found',
        });
    }
}


// get featured tours
export const getFeaturedTour = async (req, res) => {
    try {
        const tours = await Tour.find({featured: true})
            .populate("reviews")
            .limit(8);

        res.status(200).json({
            success: true,
            message: 'Successfully',
            data: tours,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Not found',
        });
    }
};

//get tour counts
export const getTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount();

        res.status(200).json({
            success: true,
            data: tourCount,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch',
        });
    }
};