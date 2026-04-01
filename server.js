const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/*", async (req, res) => {
  try {
    const url = "https://api.binance.com" + req.params[0];

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: "Proxy error",
      details: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Proxy running on port " + PORT);
});
