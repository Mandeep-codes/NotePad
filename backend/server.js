
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();


app.use(cors()); 
app.use(express.json()); 


const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully.');
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });



app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Notes Manager API' });
});


app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/admin', require('./routes/admin'));