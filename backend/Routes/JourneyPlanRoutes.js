import express from "express";
import { getJourneyPlans, createJourneyPlan, deleteJourneyPlan, updateJourneyPlan } from "../controllers/journeyPlanController.js";

const router = express.Router();

router.get("/JourneyPlans", getJourneyPlans);
router.post("/JourneyPlans", createJourneyPlan);
router.delete("/JourneyPlans/:journeyplan_id", deleteJourneyPlan);
router.put("/JourneyPlans/:journeyplan_id", updateJourneyPlan);

export default router;
