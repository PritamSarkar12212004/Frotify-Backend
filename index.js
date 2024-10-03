import express from "express";
import "dotenv/config";
import database from "./src/database/mongoDb.js";
import adminRote from "./src/routes/admin/adminRote.js";
import profile from "./src/routes/admin/profile.js";
import expenseRoute from "./src/routes/expenses/expenseRoute.js";
import moneyAddrerRoute from "./src/routes/money/moneyAddrerRoute.js";
import historyRoute from "./src/routes/history/historyRoute.js";
import cors from "cors";

// Import routes
const app = express();
database();

app.use(
  cors({
    origin: "https://frotify.vercel.app",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", adminRote);
app.use("/profile", profile);
app.use("/expense", expenseRoute);
app.use("/money", moneyAddrerRoute);
app.use("/history", historyRoute);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
