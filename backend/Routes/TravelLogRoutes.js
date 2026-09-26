import express from "express";
import { getTravelLogs, createTravelLog, deleteTravelLog, updateTravelLog } from "../controllers/travelLogController.js";

const router = express.Router();

router.get("/TravelLogs", getTravelLogs);
router.post("/TravelLogs", createTravelLog);
router.delete("/TravelLogs/:travellog_id", deleteTravelLog);
router.put("/TravelLogs/:travellog_id", updateTravelLog);

export default router;
