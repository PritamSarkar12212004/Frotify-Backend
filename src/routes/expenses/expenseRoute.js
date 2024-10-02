import createExpense from "../../controller/expesnses/createExpense.js";
import expesnseCheker from "../../controller/expesnses/expesnseCheker.js";
import { expenseControll } from "../../controller/expesnses/expenseControll.js";
import {expenseChildCheker} from '../../controller/expesnses/child.js'
import express from "express";
const router = express.Router();
router.post("/create", createExpense);
router.post("/cheker", expesnseCheker);
router.post("/delete", expenseControll);
router.post("/child/cheker", expenseChildCheker);

export default router;
