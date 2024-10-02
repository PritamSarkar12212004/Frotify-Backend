import History from "../../model/history/HistoryModel.js";
import Expense from "../../model/expenses/expensesModel.js";
const historyCreate = async (req, res) => {
  const { name, amount } = await req.body.data;
  const { item } = await req.body;
  const dbData = await Expense.findById(item);
  const dbAmount = dbData.remainAmount;
  const beforeSpendAmount = dbData.spend;
  const mainAmount = dbAmount - parseInt(amount);
  const spendAmount = parseInt(amount) + parseInt(beforeSpendAmount);
  const UpdateData = await Expense.findByIdAndUpdate(item, {
    remainAmount: mainAmount,
    spend: spendAmount,
  });
  const responseData = await History.insertMany({
    name,
    amount,
    user: item,
  });
  res.send(responseData);
};

const HistoryCheker = async (req, res) => {
  const data = await req.body;
  const responseData = await History.find({ user: data.id });
  res.send(responseData);
};
export { historyCreate, HistoryCheker };
