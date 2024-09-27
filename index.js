require('dotenv').config();
const express = require('express');
const connectDB = require('./config/config');
const postsRoutes = require('./routes/posts');

const app = express();

connectDB();


app.use(express.json());

// Rutas
app.use('/posts', postsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

module.exports = app; // Para testing