import express from "express";
import {historyCreate,HistoryCheker} from '../../controller/history/historyController.js';
const router = express.Router();
router.post("/create",historyCreate);
router.post("/cheker",HistoryCheker);
export default router;
