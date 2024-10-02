import Expense from "../../model/expenses/expensesModel.js";
const expenseChildCheker = async (req, res) => {
  try {
    const data = await req.body;
    const mainId = data.id;
    const ResponseData = await Expense.findById(mainId);
    res.send(ResponseData);
  } catch (error) {
    console.log(error);
  }
};
export { expenseChildCheker };
