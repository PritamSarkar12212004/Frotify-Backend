import User from "../../model/admin/adminModel.js";
import Money from "../../model/addmoney/addMoney.js";
const moneyAdder = async (req, res) => {
  const { amount, category, name } = await req.body.data;
  const mainAmount = await parseInt(amount);
  const { transType, auth } = await req.body;
  const userData = await User.findOne({ email: auth });
  const responseData = await Money.insertMany({
    amount,
    category,
    name,
    user: userData._id,
    transType,
  });
  const userBudget = (await userData.Budget) + mainAmount;
  const finalData = await User.findByIdAndUpdate(userData._id, {
    Budget: userBudget,
  });
  res.send(responseData);
};
const moneyCheker = async (req, res) => {
    const data = await req.body;
    const auth = await data
    const MainAuth = Object.keys(auth)[0]
  const userData = await User.findOne({ email: MainAuth });
  const responseData = await Money.find({ user: userData._id });
  res.send(responseData);
};
export { moneyAdder, moneyCheker };
