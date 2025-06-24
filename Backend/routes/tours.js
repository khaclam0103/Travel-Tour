import express from "express";
import { 
    createTour, 
    deleteTour,
    updateTour,
    getSingleTour,
    getAllTour,
    getTourBySearch,
    getFeaturedTour,
    getTourCount
} from "./../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create a new tour
router.post("/", verifyAdmin, createTour);

// Update a tour
router.put("/:id", verifyAdmin, updateTour);

// delete a tour
router.delete("/:id", verifyAdmin, deleteTour);

// get single tour
router.get("/:id", getSingleTour);

// get all tours
router.get("/", getAllTour);

// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);

// get Featured tours
router.get("/search/getFeaturedTours", getFeaturedTour);

// get tour counts
router.get("/search/getTourCount", getTourCount);

export default router;
