import express from "express";
import {
  createSite,
  getSites,
  getSite,
  updateSite,
  deleteSite,
} from "../controllers/sites.js";
import { getSiteWeather } from '../controllers/sites.js';
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
router.post("/", verifyAdmin, createSite);
router.get("/", getSites);
router.get("/:id", getSite);
router.put("/:id", verifyAdmin, updateSite);
router.delete("/:id", verifyAdmin, deleteSite);
router.get('/:id/weather', getSiteWeather);

export default router;