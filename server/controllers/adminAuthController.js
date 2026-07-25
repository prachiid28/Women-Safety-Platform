import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const registerAdmin = async (req, res) => {

  try {

    const {
      name,
      email,
      password
    } = req.body;


    const existingAdmin =
      await Admin.findOne({ email });


    if (existingAdmin) {

      return res.status(400).json({
        message: "Admin already exists"
      });

    }


    const hashedPassword =
      await bcrypt.hash(password, 10);


    const admin =
      await Admin.create({

        name,
        email,
        password: hashedPassword

      });


    res.status(201).json({
      message: "Admin created",
      admin
    });


  } catch(error) {

    res.status(500).json({
      message: error.message
    });

  }

};




export const loginAdmin = async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body;


    const admin =
      await Admin.findOne({ email });


    if (!admin) {

      return res.status(404).json({
        message: "Admin not found"
      });

    }


    const match =
      await bcrypt.compare(
        password,
        admin.password
      );


    if (!match) {

      return res.status(401).json({
        message: "Invalid password"
      });

    }


    const token =
      jwt.sign(
        {
          id: admin._id,
          role: "admin"
        },
        process.env.JWT_SECRET,
        {
          expiresIn:"7d"
        }
      );


    res.json({

      token,

      user:{
        ...admin.toObject(),
        role:"admin"
      }

    });


  } catch(error) {

    res.status(500).json({
      message:error.message
    });

  }

};