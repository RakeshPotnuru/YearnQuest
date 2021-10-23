const User = require("../models/user");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const login = (req, res, next) => {
  res.render("login");
};

// payload: {
//     "user_id":"6647627a-3ffb-4da2-9e7e-eb0e07dc6848",
//     "created_on":"2021-09-24T10:11:48.081000Z",
//     "identifier":"rakeshtesting444@gmail.com",
//     "identifier_type":"email",
//     "verification_token":"k77DG9sC7jfdON8hctTd23RqixMeqDMx1nsi",
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

const sendMail = async (req, res, next) => {
  const { fName, lName, email, contact } = req.body;

  const msg = {
    to: email,
    from: process.env.SENDER_EMAIL, // Use the email address or domain you verified on Single sender identity
    subject: "You are in!",
    html: `<div><h2>Thanks ${fName} ${lName} for your interest in joining our community</h2><p>Together we can end hunger.</div>`,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }

  res.redirect("/");
};

exports.login = login;
exports.getData = getData;
exports.sendMail = sendMail;
