const express = require("express");
const { swipeRight } = require("../controllers/matchControllers/swipeRight");
const { swipeLeft } = require("../controllers/matchControllers/swipeLeft");
const { getMatches } = require("../controllers/matchControllers/getMatches");
const { getAvailableUsers } = require("../controllers/matchControllers/getAvailableUsers");
const router = express.Router();

router.post("/swipe-right", swipeRight);
router.post("/swipe-left", swipeLeft);
router.post("/getAvailableUsers", getAvailableUsers);
router.post("/getMatches", getMatches);

module.exports = router;