import { Link } from "react-router-dom";
import { Shield, LogOut } from "lucide-react";

import { useAuth } from "../context/AuthContext";


export default function Navbar() {

  const { user, logout } = useAuth();


  return (

    <nav className="bg-white shadow-sm border-b px-8 py-4 flex items-center justify-between">


      {/* Logo */}

      <Link
        to="/"
        className="flex items-center gap-2 text-xl font-bold text-pink-600"
      >

        <Shield size={28}/>

        SheShield

      </Link>



      {/* Navigation */}

      <div className="flex items-center gap-6 text-gray-700">


        <Link
          to="/"
          className="hover:text-pink-600"
        >
          Home
        </Link>


        {
          user && user.role === "user" && (
            <>

              <Link
                to="/dashboard"
                className="hover:text-pink-600"
              >
                Dashboard
              </Link>


              <Link
                to="/contacts"
                className="hover:text-pink-600"
              >
                Emergency Contacts
              </Link>
              

            </>
          )
        }



        {
          user && user.role === "volunteer" && (

            <Link
              to="/volunteer"
              className="hover:text-pink-600"
            >
              Volunteer Panel
            </Link>

          )
        }



        {
          user && user.role === "admin" && (

            <Link
              to="/admin"
              className="hover:text-pink-600"
            >
              Admin Panel
            </Link>

          )
        }



        {
          !user && (
            <>

              <Link
                to="/login"
                className="hover:text-pink-600"
              >
                Login
              </Link>


              <Link
                to="/register"
                className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700"
              >
                Register
              </Link>
              <Link
                to="/profile"
                className="hover:text-pink-600"
                >
                Safety Profile
                </Link>

            </>
          )
        }



        {
          user && (

            <button
              onClick={logout}
              className="flex items-center gap-2 text-red-600 hover:text-red-700"
            >

              <LogOut size={18}/>

              Logout

            </button>

          )
        }


      </div>


    </nav>

  );

}