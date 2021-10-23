const User = require("../models/user");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const home = (req, res, next) => {
  res.render("index");
};

const about = (req, res, next) => {
  res.render("about");
};

const stories = (req, res, next) => {
  res.render("stories");
};

const ourWork = (req, res, next) => {
  res.render("ourwork");
};

const donate = async (req, res, next) => {
  const { amount, payload } = req.body;
  console.log(payload.identifier);
  let user;
  try {
    user = User.findOne({ email: payload.identifier });
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    res.redirect("/login");
  }

  const msg = {
    to: payload.identifier,
    from: process.env.SENDER_EMAIL, // Use the email address or domain you verified on Single sender identity
    subject: "Donation received",
    html: `<div>
    <h2>We received your donation of amount ₹${amount}</h2>
    <br>
    <img align="center" border="0" src="https://i.ibb.co/VHxj3sK/image-5.jpg" alt="Breaking Chain" title="Breaking Chain" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 600px;" width="600"/>
    <p>World needs more people like you.</p>
    <p>Together we can end Hunger✊</p>
    </div>`,
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

exports.home = home;
exports.about = about;
exports.stories = stories;
exports.ourWork = ourWork;
exports.donate = donate;
