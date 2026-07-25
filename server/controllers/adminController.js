import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Volunteer from "../models/Volunteer.js";
import Alert from "../models/Alert.js";

export const registerAdmin = async(req,res)=>{

    try{

        const {
            name,
            email,
            password
        } = req.body;


        const exists =
        await Admin.findOne({email});


        if(exists){

            return res.status(400).json({
                message:"Admin already exists"
            });

        }


        const hashedPassword =
        await bcrypt.hash(password,10);


        const admin =
        await Admin.create({

            name,
            email,
            password:hashedPassword

        });


        res.json(admin);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};




export const loginAdmin = async(req,res)=>{

    try{


        const {
            email,
            password
        } = req.body;



        const admin =
        await Admin.findOne({email});



        if(!admin){

            return res.status(404).json({
                message:"Admin not found"
            });

        }



        const match =
        await bcrypt.compare(
            password,
            admin.password
        );



        if(!match){

            return res.status(401).json({
                message:"Invalid password"
            });

        }



        const token =
        jwt.sign(
            {
                id:admin._id,
                role:"admin"
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


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
export const getUsers = async(req,res)=>{

  try{

    const users = await User.find();

    res.json(users);


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};




export const getVolunteers = async(req,res)=>{

  try{

    const volunteers = await Volunteer.find();

    res.json(volunteers);


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};




export const getAlerts = async(req,res)=>{

  try{

    const alerts = await Alert.find()
    .populate(
      "userId",
      "fullName email phone"
    );


    res.json(alerts);


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};




export const getAdminStats = async(req,res)=>{

  try{


    const users =
      await User.countDocuments();


    const volunteers =
      await Volunteer.countDocuments();


    const alerts =
      await Alert.countDocuments();



    res.json({

      users,
      volunteers,
      alerts

    });


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};
// Assign SOS alert to volunteer

export const assignAlertToVolunteer = async (req, res) => {

  try {

    const {
      volunteerId
    } = req.body;


    const alert = await Alert.findById(
      req.params.id
    );


    if (!alert) {

      return res.status(404).json({
        message: "Alert not found"
      });

    }



    alert.assignedVolunteer = volunteerId;

    alert.status = "accepted";


    await alert.save();



    res.json({

      message: "Alert assigned successfully",

      alert

    });



  } catch(error) {


    res.status(500).json({

      message:error.message

    });


  }

};
export const approveVolunteer = async (req, res) => {

  try {

    const volunteer = await Volunteer.findById(
      req.params.id
    );


    if (!volunteer) {

      return res.status(404).json({
        message: "Volunteer not found"
      });

    }


    volunteer.isVerified = true;


    await volunteer.save();


    res.json({

      message: "Volunteer approved successfully",
      volunteer

    });


  } catch(error) {

    res.status(500).json({
      message: error.message
    });

  }

};
export const getMyAlertsWithDetails = async (req,res)=>{

  try{

    const alerts = await Alert.find({
      userId:req.user.id
    })
    .populate(
      "assignedVolunteer",
      "fullName phone email"
    )
    .sort({
      createdAt:-1
    });


    res.json(alerts);


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};