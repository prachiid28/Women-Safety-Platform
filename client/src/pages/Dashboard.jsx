import { useAuth } from "../context/AuthContext";
import SOSButton from "../components/SOSButton";
import { MapPin, UserCircle } from "lucide-react";


export default function Dashboard() {

  const { user } = useAuth();


  return (

    <div className="min-h-screen bg-pink-50 px-8 py-10">


      <div className="max-w-6xl mx-auto">


        {/* Header */}

        <h1 className="text-3xl font-bold text-gray-900">

          Welcome, {user?.fullName} 👋

        </h1>


        <p className="text-gray-600 mt-2">

          Stay safe. Help is one tap away.

        </p>




        {/* Main Grid */}

        <div className="grid md:grid-cols-2 gap-10 mt-10">



          {/* Profile Card */}

          <div className="bg-white rounded-3xl shadow p-8">


            <div className="flex items-center gap-3 mb-6">

              <UserCircle 
                size={40}
                className="text-pink-600"
              />

              <h2 className="text-xl font-semibold">

                Safety Profile

              </h2>

            </div>



            <div className="space-y-3 text-gray-700">


              <p>
                <b>Name:</b> {user?.fullName}
              </p>


              <p>
                <b>Email:</b> {user?.email}
              </p>


              <p>
                <b>Phone:</b> {user?.phone}
              </p>


            </div>


          </div>





          {/* SOS Card */}

          <div className="bg-white rounded-3xl shadow p-8 flex flex-col items-center justify-center">


            <h2 className="text-xl font-semibold mb-6">

              Emergency Assistance

            </h2>


            <SOSButton />


            <div className="flex items-center gap-2 text-gray-500 mt-6">

              <MapPin size={18}/>

              Live location will be shared automatically

            </div>


          </div>


        </div>



      </div>


    </div>

  );

}