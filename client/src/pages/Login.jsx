import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, ShieldCheck } from "lucide-react";

import API from "../api/axios";
import { useAuth } from "../context/AuthContext";


export default function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();


  const [formData, setFormData] = useState({

    email: "",
    password: "",

  });



  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();


    try {


      const res = await API.post(
        "/users/login",
        formData
      );


      login(res.data);


      navigate("/dashboard");


    } catch (error) {


      alert(
        error.response?.data?.message ||
        "Login failed"
      );


    }

  };



  return (

    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-6">


      <div className="bg-white max-w-md w-full rounded-3xl shadow-xl p-8">



        {/* Header */}

        <div className="text-center mb-8">


          <div className="mx-auto bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center">


            <ShieldCheck
              size={35}
              className="text-pink-600"
            />


          </div>



          <h1 className="text-3xl font-bold text-gray-900 mt-4">

            Welcome Back

          </h1>



          <p className="text-gray-500 mt-2">

            Login to your SheShield account

          </p>


        </div>





        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >



          {/* Email */}

          <div className="relative">

            <Mail
              size={20}
              className="absolute left-3 top-3 text-gray-400"
            />


            <input

              type="email"

              name="email"

              placeholder="Email Address"

              value={formData.email}

              onChange={handleChange}

              className="w-full border rounded-xl px-10 py-3 outline-none focus:ring-2 focus:ring-pink-400"

              required

            />


          </div>





          {/* Password */}

          <div className="relative">


            <Lock
              size={20}
              className="absolute left-3 top-3 text-gray-400"
            />


            <input

              type="password"

              name="password"

              placeholder="Password"

              value={formData.password}

              onChange={handleChange}

              className="w-full border rounded-xl px-10 py-3 outline-none focus:ring-2 focus:ring-pink-400"

              required

            />


          </div>






          <button

            type="submit"

            className="w-full bg-pink-600 text-white py-3 rounded-xl font-semibold hover:bg-pink-700 transition"

          >

            Login

          </button>




        </form>





        <p className="text-center text-gray-600 mt-6">


          Don't have an account?


          <Link

            to="/register"

            className="text-pink-600 font-semibold ml-2"

          >

            Register

          </Link>


        </p>



      </div>


    </div>

  );

}