import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "Not authorized Login again" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    req.body.userId = token_decode.id;

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;

// req.body me user id isliye add kr rhe hai ki jb user cart me kuch add ya remove krega to us particular user ko search krke uska cart upadte krne ke liye id ki need hogi
//  aur token hm jb wha se request send krenge to uske sath headers me bhejenge
