const mongoose = require("mongoose");

const { Schema } = mongoose;

const personSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: String,
  isHost: Boolean,
  hasResponded: Boolean,
  isAttending: Boolean,
  food: {
    type: String,
    trim: true,
  },
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
