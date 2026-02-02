import express from "express";
import cors from "cors";

const app = express();
const PORT = 5001; // 🔥 ĐỔI SANG 5001

app.use(cors());
app.use(express.json());

// test api
app.get("/", (req, res) => {
  res.json({ message: "Backend OK 🚀" });
});

// chat api
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Thiếu message" });
  }

  // fake AI trả lời (sau này gắn OpenAI)
  const reply = `🤖 AI trả lời: "${message}"`;

  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`✅ Backend chạy tại http://localhost:${PORT}`);
});
