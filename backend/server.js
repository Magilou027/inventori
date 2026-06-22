import 'dotenv/config';
import express from 'express';
import OpenAI from 'openai';
import cors from 'cors';

const app = express();
const port = 3001; // Port untuk backend

// Inisialisasi OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors()); // Mengizinkan request dari frontend (React)
app.use(express.json());

// Endpoint untuk chat
app.post('/api/chat', async (req, res) => {
  const { history } = req.body; // Menerima 'history' bukan 'message'

  if (!history || !Array.isArray(history) || history.length === 0) {
    return res.status(400).json({ error: 'Riwayat percakapan tidak valid.' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Anda bisa ganti dengan model lain seperti 'gpt-4'
      messages: [
        { role: 'system', content: 'Anda adalah asisten AI yang membantu untuk aplikasi ERP bernama Orbibox. Jawab pertanyaan pengguna dengan akurat. Jika pertanyaan berhubungan dengan data keuangan, berikan jawaban analitis. Jika pertanyaan bersifat umum, jawablah sebagaimana mestinya.' },
        ...history, // Menyertakan seluruh riwayat percakapan
      ],
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });

  } catch (error) {
    // Log error yang lebih detail di konsol backend
    console.error('Error calling OpenAI API:', error.message);

    // Kirim pesan error yang lebih spesifik ke frontend
    const errorMessage = error.response?.data?.error?.message || error.message || 'Terjadi kesalahan pada server AI.';
    
    res.status(500).json({ error: errorMessage });
  }
});

app.listen(port, () => {
  console.log(`Backend server berjalan di http://localhost:${port}`);
});
