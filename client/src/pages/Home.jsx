import { Link } from "react-router-dom";
import {
  ShieldCheck,
  MapPin,
  PhoneCall,
  UserRound,
  HandHelping,
  Shield
} from "lucide-react";


export default function Home() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">


      {/* Hero Section */}

      <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">


        {/* Left Content */}

        <div>


          <div className="flex items-center gap-2 text-pink-600 font-medium mb-4">

            <ShieldCheck size={22}/>

            Trusted Women Safety Platform

          </div>



          <h1 className="text-5xl font-bold text-gray-900 leading-tight">

            Your Safety.
            <br />

            Your Voice.
            <br />

            Your Shield. 🛡️

          </h1>



          <p className="mt-6 text-gray-600 text-lg max-w-lg">

            SheShield connects women with verified volunteers
            and emergency support teams during unsafe situations.
            Get instant help with one tap.

          </p>



          <div className="mt-8 flex gap-4">


            <Link
              to="/user-login"
              className="bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-700"
            >

              Emergency SOS 🚨

            </Link>



            <Link
              to="/register"
              className="border border-pink-600 text-pink-600 px-6 py-3 rounded-xl font-semibold hover:bg-pink-50"
            >

              Join SheShield

            </Link>


          </div>


        </div>





        {/* Right Card */}

        <div className="flex justify-center">


          <div className="bg-white shadow-xl rounded-3xl p-8 max-w-md w-full">


            <div className="text-center">


              <div className="mx-auto bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center">

                <ShieldCheck
                  size={45}
                  className="text-pink-600"
                />

              </div>


              <h2 className="text-2xl font-bold mt-5">

                Choose Your Role

              </h2>


              <p className="text-gray-600 mt-2">

                Login according to your SheShield account

              </p>


            </div>



            {/* Role Buttons */}


            <div className="mt-6 space-y-4">


              <Link
                to="/user-login"
                className="
                flex items-center gap-4
                p-4
                rounded-xl
                bg-pink-50
                hover:bg-pink-100
                "
              >

                <UserRound
                  className="text-pink-600"
                />

                <div>

                  <h3 className="font-semibold">
                    User Login
                  </h3>

                  <p className="text-sm text-gray-600">
                    Get emergency support
                  </p>

                </div>


              </Link>





              <Link
                to="/volunteer-login"
                className="
                flex items-center gap-4
                p-4
                rounded-xl
                bg-green-50
                hover:bg-green-100
                "
              >

                <HandHelping
                  className="text-green-600"
                />


                <div>

                  <h3 className="font-semibold">
                    Volunteer Login
                  </h3>

                  <p className="text-sm text-gray-600">
                    Help women in emergencies
                  </p>

                </div>


              </Link>





              <Link
                to="/admin-login"
                className="
                flex items-center gap-4
                p-4
                rounded-xl
                bg-blue-50
                hover:bg-blue-100
                "
              >

                <Shield
                  className="text-blue-600"
                />


                <div>

                  <h3 className="font-semibold">
                    Admin Login
                  </h3>

                  <p className="text-sm text-gray-600">
                    Manage platform
                  </p>

                </div>


              </Link>


            </div>


          </div>


        </div>


      </section>





      {/* Features */}

      <section className="max-w-7xl mx-auto px-8 pb-20 grid md:grid-cols-2 gap-6">


        <div className="bg-white p-6 rounded-2xl shadow">

          <MapPin className="text-pink-600"/>

          <h3 className="font-bold mt-3">
            Live Location Sharing
          </h3>

          <p className="text-gray-600 mt-2">
            Share your location instantly during emergencies.
          </p>

        </div>




        <div className="bg-white p-6 rounded-2xl shadow">

          <PhoneCall className="text-pink-600"/>

          <h3 className="font-bold mt-3">
            Emergency Assistance
          </h3>

          <p className="text-gray-600 mt-2">
            Connect with trusted responders quickly.
          </p>

        </div>


      </section>


    </div>

  );

}