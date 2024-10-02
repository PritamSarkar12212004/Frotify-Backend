import User from "../../model/admin/adminModel.js";
const register = async (req, res) => {
  try {
    const data = await req.body;
    const EmailAuth = await User.findOne({ email: data.email });
    if (EmailAuth) {
      res.status(404).json({
        massage: "email already exist",
      });
    } else {
      const DbData = await User.insertMany(data);
      res.status(202).json({
        email: DbData[0].email,
        massage: "register success",
      });
    }
  } catch (error) {
    res.status(404).json({
      
    });
  }
};

const login = async (req, res) => {
  try {
    const data = await req.body;
    const DbData = await User.findOne({
      email: data.email,
      password: data.password,
    });

    if (DbData) {
      res.status(202).json({
        email: DbData.email,
      });
    } else {
      res.status(404).json({
        error: "login faild",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export { register, login };
