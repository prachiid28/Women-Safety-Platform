import mongoose from "mongoose";


const alertSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },


  location: {

    latitude: Number,

    longitude: Number

  },


  description: {
    type: String,
    default: "Emergency SOS Alert"
  },


  status: {
    type: String,
    enum: [
      "pending",
      "accepted",
      "resolved"
    ],
    default: "pending"
  },


  assignedVolunteer: {

    type: mongoose.Schema.Types.ObjectId,

    ref: "Volunteer",

    default: null

  }


},
{
  timestamps:true
});


export default mongoose.model(
  "Alert",
  alertSchema
);