const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {getCompliment, getAllCompliments, getFortune, deleteCompliment, addCompliment, addEmojiToFortune} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/compliment/all", getAllCompliments);
app.get("/api/compliment/fortune", getFortune);
app.post("/api/compliment", addCompliment)
app.delete("/api/compliment", deleteCompliment);
app.put("/api/compliment/fortune", addEmojiToFortune)

app.listen(4000, () => console.log("Server running on 4000"));
