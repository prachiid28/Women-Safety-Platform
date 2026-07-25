import { Routes, Route } from "react-router-dom";


import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import UserDashboard from "../pages/UserDashboard";
import Volunteer from "../pages/Volunteer";
import Admin from "../pages/Admin";

import Contacts from "../pages/Contacts";
import Profile from "../pages/Profile";


import ProtectedRoute from "../components/ProtectedRoute";


import VolunteerRegister from "../pages/VolunteerRegister";

import UserLogin from "../pages/UserLogin";
import VolunteerLogin from "../pages/VolunteerLogin";
import AdminLogin from "../pages/AdminLogin";


import AdminUsers from "../pages/AdminUsers";
import AdminVolunteers from "../pages/AdminVolunteers";
import AdminAlerts from "../pages/AdminAlerts";


import VolunteerDashboard from "../pages/VolunteerDashboard";



export default function AppRoutes() {


  return (

    <Routes>


      {/* Home */}

      <Route
        path="/"
        element={<Home />}
      />



      {/* Common Login/Register */}

      <Route
        path="/login"
        element={<Login />}
      />


      <Route
        path="/register"
        element={<Register />}
      />



      {/* User Login */}

      <Route
        path="/user-login"
        element={<UserLogin />}
      />



      {/* User Dashboard */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute role="user">
            <UserDashboard />
          </ProtectedRoute>
        }
      />



      {/* User Contacts */}

      <Route
        path="/contacts"
        element={
          <ProtectedRoute role="user">
            <Contacts />
          </ProtectedRoute>
        }
      />



      {/* User Profile */}

      <Route
        path="/profile"
        element={
          <ProtectedRoute role="user">
            <Profile />
          </ProtectedRoute>
        }
      />



      {/* Volunteer Registration */}

      <Route
        path="/volunteer/register"
        element={<VolunteerRegister />}
      />



      {/* Volunteer Login */}

      <Route
        path="/volunteer-login"
        element={<VolunteerLogin />}
      />



      {/* Volunteer Dashboard */}

      <Route
        path="/volunteer-dashboard"
        element={
          <ProtectedRoute role="volunteer">
            <VolunteerDashboard />
          </ProtectedRoute>
        }
      />



      {/* Volunteer */}

      <Route
        path="/volunteer"
        element={
          <ProtectedRoute role="volunteer">
            <Volunteer />
          </ProtectedRoute>
        }
      />



      {/* Admin Login */}

      <Route
        path="/admin-login"
        element={<AdminLogin />}
      />



      {/* Admin Dashboard */}

      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <Admin />
          </ProtectedRoute>
        }
      />



      {/* Admin Users */}

      <Route
        path="/admin/users"
        element={
          <ProtectedRoute role="admin">
            <AdminUsers />
          </ProtectedRoute>
        }
      />



      {/* Admin Volunteers */}

      <Route
        path="/admin/volunteers"
        element={
          <ProtectedRoute role="admin">
            <AdminVolunteers />
          </ProtectedRoute>
        }
      />



      {/* Admin Alerts */}

      <Route
        path="/admin/alerts"
        element={
          <ProtectedRoute role="admin">
            <AdminAlerts />
          </ProtectedRoute>
        }
      />


    </Routes>

  );

}