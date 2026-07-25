import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    currentLocation: {
      latitude: Number,
      longitude: Number,
    },

    role: {
      type: String,
      default: "volunteer",
    },
  },
  {
    timestamps: true,
  }
);


export default mongoose.model("Volunteer", volunteerSchema);