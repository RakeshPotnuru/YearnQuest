const mongoose = require("mongoose");
const User = require("../models/user");

const login = (req, res, next) => {
  res.render("login");
};

// payload: {
//     "user_id":"6647627a-3ffb-4da2-9e7e-eb0e07dc6848",
//     "created_on":"2021-09-24T10:11:48.081000Z",
//     "identifier":"rakeshtesting444@gmail.com",
//     "identifier_type":"email",
//     "verification_token":"k77DG9sC7jfdON8hctTd23RqixMeqDMx1nsi",
//     "customFieldInputValues":{
//         "Username":"Rakesh Testing"
//     }
// }

const getData = async (req, res, next) => {
  const payload = req.body.payload;

  const user_id = payload.user_id;
  const created_on = payload.created_on;
  const email = payload.identifier;
  const identifier_type = payload.identifier_type;
  const verification_token = payload.verification_token;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = Error("Signing up failed, please try again", 500);

    return next(error);
  }

  if (existingUser) {
    return res.status(200);
  }

  const newUser = new User({
    user_id,
    created_on,
    email,
    identifier_type,
    verification_token,
  });

  try {
    await newUser.save();
  } catch (err) {
    const error = Error("Signup failed, please try again", 500);

    return next(error);
  }

  res.status(200);
};

exports.login = login;
exports.getData = getData;
