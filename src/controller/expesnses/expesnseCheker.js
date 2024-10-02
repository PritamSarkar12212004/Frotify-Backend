import User from "../../model/admin/adminModel.js";
import Expense from "../../model/expenses/expensesModel.js";

const expenseCheker = async (req, res) => {
  const data = await req.body;
  const email = await Object.keys(data)[0];
  const user = await User.findOne({ email: email });
  const resData = await Expense.find({ user: user._id });
  res.send(resData);
};
export default expenseCheker;
