const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required!" });
  const shortId = nanoid(8);

  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.render("home", {
    id: shortId,
  });
}

async function handleAnalyticsOfUrl(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalVisits: result.visitHistory.length,
    visitHistory: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortUrl,
  handleAnalyticsOfUrl,
};
