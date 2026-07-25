import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Phone, Lock, ShieldCheck } from "lucide-react";

import API from "../api/axios";


export default function Register() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({

    fullName: "",
    email: "",
    phone: "",
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

      await API.post(
        "/users/register",
        formData
      );


      alert("Registration successful 🛡️");

      navigate("/login");


    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration failed"
      );

    }

  };



  return (

    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-6">


      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">


        {/* Header */}

        <div className="text-center mb-8">


          <div className="mx-auto bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center">

            <ShieldCheck
              size={35}
              className="text-pink-600"
            />

          </div>



          <h1 className="text-3xl font-bold text-gray-900 mt-4">

            Join SheShield

          </h1>



          <p className="text-gray-500 mt-2">

            Create your safety account

          </p>


        </div>




        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >


          {/* Name */}

          <div className="relative">

            <User
              className="absolute left-3 top-3 text-gray-400"
              size={20}
            />

            <input

              type="text"

              name="fullName"

              placeholder="Full Name"

              value={formData.fullName}

              onChange={handleChange}

              className="w-full border rounded-xl px-10 py-3 outline-none focus:ring-2 focus:ring-pink-400"

              required

            />

          </div>





          {/* Email */}

          <div className="relative">

            <Mail
              className="absolute left-3 top-3 text-gray-400"
              size={20}
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






          {/* Phone */}

          <div className="relative">

            <Phone
              className="absolute left-3 top-3 text-gray-400"
              size={20}
            />

            <input

              type="text"

              name="phone"

              placeholder="Phone Number"

              value={formData.phone}

              onChange={handleChange}

              className="w-full border rounded-xl px-10 py-3 outline-none focus:ring-2 focus:ring-pink-400"

              required

            />

          </div>






          {/* Password */}

          <div className="relative">

            <Lock
              className="absolute left-3 top-3 text-gray-400"
              size={20}
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

            Create Account

          </button>



        </form>





        <p className="text-center text-gray-600 mt-6">


          Already have an account?


          <Link

            to="/login"

            className="text-pink-600 font-semibold ml-2"

          >

            Login

          </Link>


        </p>



      </div>


    </div>

  );

}