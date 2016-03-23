import mongoose   from "mongoose"
const Schema = mongoose.Schema

// Create a new Schema for Calendar objects
// (the Calendar model)
let CalendarSchema = new Schema({
  id: String,
  date: Date,
  email: String,
  name: String,
  windows: [{
    day: Number,
    content: {
      contentType: String,
      url: String
    },
    opened: Boolean
  }],
  year: String
});

// Export the model
module.exports = mongoose.model("Calendar", CalendarSchema)