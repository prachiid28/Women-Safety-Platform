import express from "express";


import {
  registerAdmin,
  loginAdmin
} from "../controllers/adminAuthController.js";


import {
  getUsers,
  getVolunteers,
  getAlerts,
  getAdminStats,
  approveVolunteer,
  assignAlertToVolunteer
} from "../controllers/adminController.js";


import protect from "../middleware/authMiddleware.js";



const router = express.Router();



// Admin Auth

router.post(
  "/register",
  registerAdmin
);


router.post(
  "/login",
  loginAdmin
);




// Users

router.get(
  "/users",
  protect,
  getUsers
);




// Volunteers

router.get(
  "/volunteers",
  protect,
  getVolunteers
);


router.put(
  "/volunteers/approve/:id",
  protect,
  approveVolunteer
);




// Alerts

router.get(
  "/alerts",
  protect,
  getAlerts
);



router.put(
  "/alerts/assign/:id",
  protect,
  assignAlertToVolunteer
);




// Stats

router.get(
  "/stats",
  protect,
  getAdminStats
);



export default router;