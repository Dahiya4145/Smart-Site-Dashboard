import express from "express";
import {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  getTasksBySiteId, 
} from "../controllers/tasks.js";

import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/site/:siteId", verifyToken, createTask);
router.get("/", verifyToken, getTasks);
router.get("/:id", verifyToken, getTask);
router.put("/:id", verifyToken, updateTask);
router.delete("/:id", verifyToken, deleteTask);
router.get("/site/:siteId", getTasksBySiteId);
export default router;