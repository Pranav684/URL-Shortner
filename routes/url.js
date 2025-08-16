const express = require("express");
const {
  handleGenerateNewShortUrl,
  handleAnalyticsOfUrl,
} = require("../controllers/url");
const router = express.Router();

router.post("/", handleGenerateNewShortUrl);

router.get("/analytics/:shortId", handleAnalyticsOfUrl);

module.exports = router;
