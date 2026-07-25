import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Phone, Lock, ShieldCheck, MapPin } from "lucide-react";

import API from "../api/axios";


export default function VolunteerRegister() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({

    fullName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    verificationId: ""

  });



  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();


    try {


      await API.post(
        "/volunteers/register",
        formData
      );


      alert(
        "Registration submitted. Waiting for verification ✅"
      );


      navigate("/login");


    } catch(error) {


      alert(
        error.response?.data?.message ||
        "Registration failed"
      );


    }

  };



  return (

    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-6">


      <div className="bg-white max-w-md w-full rounded-3xl shadow-xl p-8">



        <div className="text-center mb-8">


          <div className="mx-auto bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center">

            <ShieldCheck
              className="text-pink-600"
              size={35}
            />

          </div>



          <h1 className="text-3xl font-bold mt-4">

            Volunteer Registration

          </h1>


          <p className="text-gray-500 mt-2">

            Join SheShield safety network

          </p>


        </div>





        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >



          <div className="relative">

            <User className="absolute left-3 top-3 text-gray-400"/>

            <input

              name="fullName"

              placeholder="Full Name"

              value={formData.fullName}

              onChange={handleChange}

              className="w-full border rounded-xl px-10 py-3"

              required

            />

          </div>





          <div className="relative">

            <Mail className="absolute left-3 top-3 text-gray-400"/>

            <input

              name="email"

              type="email"

              placeholder="Email"

              value={formData.email}

              onChange={handleChange}

              className="w-full border rounded-xl px-10 py-3"

              required

            />

          </div>





          <div className="relative">

            <Phone className="absolute left-3 top-3 text-gray-400"/>

            <input

              name="phone"

              placeholder="Phone Number"

              value={formData.phone}

              onChange={handleChange}

              className="w-full border rounded-xl px-10 py-3"

              required

            />

          </div>





          <div className="relative">

            <Lock className="absolute left-3 top-3 text-gray-400"/>

            <input

              name="password"

              type="password"

              placeholder="Password"

              value={formData.password}

              onChange={handleChange}

              className="w-full border rounded-xl px-10 py-3"

              required

            />

          </div>





          <div className="relative">

            <MapPin className="absolute left-3 top-3 text-gray-400"/>

            <input

              name="address"

              placeholder="Address"

              value={formData.address}

              onChange={handleChange}

              className="w-full border rounded-xl px-10 py-3"

              required

            />

          </div>





          <input

            name="verificationId"

            placeholder="Verification ID / Document Number"

            value={formData.verificationId}

            onChange={handleChange}

            className="w-full border rounded-xl px-4 py-3"

            required

          />





          <button

            className="w-full bg-pink-600 text-white py-3 rounded-xl font-semibold hover:bg-pink-700"

          >

            Submit For Verification

          </button>



        </form>





        <p className="text-center mt-6 text-gray-600">

          Already verified?


          <Link
            to="/login"
            className="text-pink-600 ml-2 font-semibold"
          >
            Login
          </Link>


        </p>



      </div>


    </div>

  );

}