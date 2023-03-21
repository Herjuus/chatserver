const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 3000;
// const dbConnectionString = process.env.DB_CONNECTION_STRING;

mongoose
  .connect('mongodb+srv://link', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

const schema = new mongoose.Schema({
    name: String,
    message: String,
});

const Message = mongoose.model('Message', schema);

app.use(cors());
app.use(express.json());

app.get('/messages', async (req, res) => {
    try {
      const messages = await Message.find();
      res.json(messages);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
});
app.post('/messages', async (req, res) => {
    const newMessage = new Message({
        name: req.body.name,
        message: req.body.message
    });
    const insertedMessage = await newMessage.save();
    return res.status(201).json(insertedMessage);
})
  
app.listen(port, () => console.log(`Server running on port ${port}`));
  
