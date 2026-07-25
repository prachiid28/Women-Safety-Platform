import Volunteer from "../models/Volunteer.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// Volunteer Registration
export const registerVolunteer = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      password
    } = req.body;


    const existingVolunteer = await Volunteer.findOne({ email });

    if (existingVolunteer) {
      return res.status(400).json({
        message: "Volunteer already exists",
      });
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    const volunteer = await Volunteer.create({
      fullName,
      email,
      phone,
      password: hashedPassword,
    });


    res.status(201).json({
      message: "Volunteer registration successful",
      volunteer,
    });


  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// Volunteer Login
export const loginVolunteer = async (req, res) => {
  try {

    const {
      email,
      password
    } = req.body;


    const volunteer = await Volunteer.findOne({ email });


    if (!volunteer) {
      return res.status(404).json({
        message: "Volunteer not found",
      });
    }


    const isMatch = await bcrypt.compare(
      password,
      volunteer.password
    );


    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }


    const token = jwt.sign(
      {
        id: volunteer._id,
        role: "volunteer",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );


    res.json({
  message: "Login successful",
  token,
  user: {
    ...volunteer.toObject(),
    role: "volunteer"
  }
});

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};