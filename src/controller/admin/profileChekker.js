import User from "../../model/admin/adminModel.js";
const profileChekker = async (req, res) => {
  try {
    const data = await req.body;
    const dbResponse = await User.findOne({ email: Object.keys(data)[0] });
    res.send(dbResponse);
  } catch (error) {
    console.log(error);
  }
};
export { profileChekker };
