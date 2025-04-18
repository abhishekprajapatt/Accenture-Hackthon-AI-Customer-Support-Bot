const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  user: { type: String, required: true },
  message: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  timestamp: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Feedback', FeedbackSchema);
