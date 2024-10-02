import express from "express";
import { profileChekker } from "../../controller/admin/profileChekker.js";
const router = express.Router();
router.post("/cheker", profileChekker);
export default router;
