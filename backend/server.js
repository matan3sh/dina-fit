const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public'));
  // app.use(express.static(path.resolve(__dirname, '../frontend/src')));
} else {
  const corsOptions = {
    origin: [
      'http://127.0.0.1:5000',
      'http://localhost:5000',
      'http://127.0.0.1:3000',
      'http://localhost:3000'
    ],
    credentials: true
  };
  app.use(cors(corsOptions));
}

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to the API' }));

// Define Routes
app.use('/api/user', require('./routes/user'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', require('./routes/contact'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
