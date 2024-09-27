const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Por favor, añade un título'],
    trim: true,
    maxlength: [100, 'El título no puede tener más de 100 caracteres']
  },
  body: {
    type: String,
    required: [true, 'Por favor, añade el contenido del post'],
    trim: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);