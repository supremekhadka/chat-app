const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "34473469-2011-4e23-a2fd-b4fe3b6a2912"}}
    )
    return res.status(r.status).json(r.data)
} catch (error) {
      return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(3001);