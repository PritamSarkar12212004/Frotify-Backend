import Expense from "../../model/expenses/expensesModel.js";
import User from "../../model/admin/adminModel.js";
const expenseControll = async (req, res) => {
  const data = await req.body;
  const id = await Object.keys(data)[0];
  const deleteResponse = await Expense.findByIdAndDelete(id);
  res.send(deleteResponse);
};
export { expenseControll };
