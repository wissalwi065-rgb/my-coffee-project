const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// هذا الجزء هو الذي سيستقبل بيانات الحجز من موقعك
app.post('/api/reserve', (req, res) => {
    const data = req.body;
    console.log('وصل حجز جديد لـ Velvet Coffee:', data);
    res.json({ message: 'تم استلام حجزك بنجاح! ننتظركِ في المقهى.' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`السيرفر يعمل الآن على الرابط: http://localhost:${PORT}`);
});