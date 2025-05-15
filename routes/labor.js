import express from "express";
import {
  createLaborLog,
  getLaborLogs,
  getLaborLog,
  updateLaborLog,
  deleteLaborLog,
  getLaborBySiteId
} from "../controllers/labor.js";

import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/site/:siteId", verifyToken, createLaborLog);
router.get("/", verifyToken, getLaborLogs);
router.get("/:id", verifyToken, getLaborLog);
router.put("/:id", verifyToken, updateLaborLog);
router.delete("/:id", verifyToken, deleteLaborLog);
router.get("/site/:siteId", getLaborBySiteId);

export default router;