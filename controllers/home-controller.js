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

exports.home = home;
exports.about = about;
exports.stories = stories;
exports.ourWork = ourWork;
