import express from "express";

import {
  createAlert,
  getMyAlerts,
  getAvailableAlerts,
  acceptAlert,
  getMyAlertsWithDetails,
  resolveAlert
} from "../controllers/alertController.js";


import protect from "../middleware/authMiddleware.js";


const router = express.Router();


router.post(
  "/",
  protect,
  createAlert
);


router.get(
  "/my",
  protect,
  getMyAlertsWithDetails
);


router.get(
  "/volunteer",
  protect,
  getAvailableAlerts
);


router.put(
  "/accept/:id",
  protect,
  acceptAlert
);


router.put(
  "/resolve/:id",
  protect,
  resolveAlert
);


export default router;