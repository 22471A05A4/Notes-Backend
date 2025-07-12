const express = require('express');
const connectDB = require('./config/db'); // ✅ Connects MongoDB
const cors = require('cors');
require('dotenv').config(); // ✅ Loads .env config
const mongoose = require('mongoose');

// Route files
const authRoutes = require('./routes/authRoutes');   // ✅ Auth routes
const noteRoutes = require('./routes/NotesRoutes');  // ✅ Notes routes

const app = express();

// Connect to DB
connectDB(); // 🔄 Make sure this connects properly (see below)

app.use(cors());
app.use(express.json()); // ✅ Parses JSON body

// API Routes
app.use('/api/auth', authRoutes);   // Example: http://localhost:5000/api/auth/login
app.use('/api/notes', noteRoutes);  // Example: http://localhost:5000/api/notes/

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
