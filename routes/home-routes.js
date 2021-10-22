const express = require("express");

const homeController = require("../controllers/home-controller");
const router = express.Router();

router.get("/", homeController.home);
router.get("/about", homeController.about);
router.get("/stories", homeController.stories);
router.get("/ourwork", homeController.ourWork);

module.exports = router;
