import Alert from "../models/Alert.js";
import Volunteer from "../models/Volunteer.js";


// Create SOS Alert
export const createAlert = async (req, res) => {
  try {
    const { latitude, longitude, description } = req.body;

    const alert = await Alert.create({
      userId: req.user.id,
      location: {
        latitude,
        longitude,
      },
      description,
    });

    res.status(201).json({
      message: "SOS Alert Created",
      alert,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Get User Alert History
export const getMyAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find({
      userId: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.json(alerts);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getAvailableAlerts = async (req, res) => {

  try {

    console.log("REQ USER:", req.user);


    const alerts = await Alert.find({
      assignedVolunteer: req.user.id
    })
    .populate(
      "userId",
      "fullName phone email"
    );


    console.log("FOUND ALERTS:", alerts);


    res.json(alerts);


  } catch(error) {

    console.log(error);

    res.status(500).json({
      message:error.message
    });

  }

};
export const acceptAlert = async (req, res) => {
  try {

    const alert = await Alert.findById(req.params.id);

    if (!alert) {
      return res.status(404).json({
        message: "Alert not found",
      });
    }


    alert.status = "accepted";
    alert.assignedVolunteer = req.user.id;


    await alert.save();


    res.json({
      message: "Alert accepted successfully",
      alert,
    });


  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const resolveAlert = async (req, res) => {

  try {

    const alert = await Alert.findById(
      req.params.id
    );


    if(!alert){

      return res.status(404).json({
        message:"Alert not found"
      });

    }


    alert.status = "resolved";


    await alert.save();


    res.json({

      message:"Emergency resolved successfully ✅",
      alert

    });


  } catch(error){

    res.status(500).json({

      message:error.message

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
