import Expense from "../../model/expenses/expensesModel.js";
import User from "../../model/admin/adminModel.js";
const createExpesne = async (req, res) => {
  const data = await req.body;
  const { name, amount, category } = await data.data;
  const { email, Budget } = await data;
  const transType = await data.transType;
  const ownerId = await User.findOne({ email: email });
  const userSpendMoney = (await ownerId.spend) + parseInt(amount);
  const finalAmountToUser = (await Budget) - amount;
  const UserAmounUpdate = await User.findByIdAndUpdate(ownerId._id, {
    Budget: finalAmountToUser,
  });
  const dbResponse = await Expense.insertMany({
    name,
    remainAmount: parseInt(amount),
    amount,
    category,
    user: ownerId._id,
    transType: transType,
  });
  const totalBuaget = await Expense.find({});
  totalBuaget.filter((item, index, arr) => {
    if (index === arr.length - 1) {
      const data = async () => {
        const noIndex = index + 1;
        const UserAmounUpdate = await User.findByIdAndUpdate(ownerId._id, {
          No_Of_Budget: noIndex,
          spend: userSpendMoney,
        });
      };
      data();
    }
    res.send(dbResponse)
  });
};
export default createExpesne;
