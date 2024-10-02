import express from "express";
const router = express.Router();
import {moneyAdder,moneyCheker} from '../../controller/money/moneyController.js'

router.post("/add",moneyAdder);
router.post("/cheker",moneyCheker);
export default router;
