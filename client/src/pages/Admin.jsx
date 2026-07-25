import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Users,
  ShieldCheck,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

import API from "../api/axios";


export default function Admin() {

  const [volunteers, setVolunteers] = useState([]);

  const [stats, setStats] = useState({
    users: 0,
    volunteers: 0,
    alerts: 0
  });


  const getData = async () => {

    try {

      const volunteerRes = await API.get(
        "/admin/volunteers"
      );


      const statsRes = await API.get(
        "/admin/stats"
      );


      setVolunteers(
        volunteerRes.data.filter(
          (v) => !v.isVerified
        )
      );


      setStats(
        statsRes.data
      );


    } catch(error) {

      console.log(
        error.response?.data || error.message
      );

    }

  };



  useEffect(() => {

    getData();

  }, []);




  const approveVolunteer = async(id)=>{

    try{

      await API.put(
        `/admin/volunteers/approve/${id}`
      );


      alert(
        "Volunteer approved ✅"
      );


      getData();


    }catch(error){

      console.log(
        error.response?.data || error.message
      );

    }

  };




  return (

    <div className="min-h-screen bg-gray-50 px-8 py-10">


      <div className="max-w-7xl mx-auto">


        <h1 className="text-3xl font-bold">
          Admin Dashboard 👨‍💼
        </h1>


        <p className="text-gray-600 mt-2">
          Manage users, volunteers and emergency alerts.
        </p>




        {/* Stats Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">



          {/* USERS */}

          <Link
            to="/admin/users"
            className="bg-white rounded-3xl shadow p-6 flex gap-4 items-center hover:shadow-xl hover:scale-105 transition-all"
          >

            <Users className="text-pink-600"/>

            <div>

              <p className="text-gray-500">
                Users
              </p>

              <h2 className="text-2xl font-bold">
                {stats.users}
              </h2>

            </div>

          </Link>





          {/* VOLUNTEERS */}

          <Link
            to="/admin/volunteers"
            className="bg-white rounded-3xl shadow p-6 flex gap-4 items-center hover:shadow-xl hover:scale-105 transition-all"
          >

            <ShieldCheck className="text-green-600"/>

            <div>

              <p className="text-gray-500">
                Volunteers
              </p>

              <h2 className="text-2xl font-bold">
                {stats.volunteers}
              </h2>

            </div>

          </Link>





          {/* ALERTS */}

          <Link
            to="/admin/alerts"
            className="bg-white rounded-3xl shadow p-6 flex gap-4 items-center hover:shadow-xl hover:scale-105 transition-all"
          >

            <AlertTriangle className="text-red-600"/>

            <div>

              <p className="text-gray-500">
                Alerts
              </p>

              <h2 className="text-2xl font-bold">
                {stats.alerts}
              </h2>

            </div>

          </Link>



        </div>





        {/* Pending Volunteers */}

        <div className="bg-white rounded-3xl shadow p-8 mt-10">


          <h2 className="text-xl font-bold mb-6">
            Pending Volunteer Verification
          </h2>



          {
            volunteers.length === 0 ? (

              <p className="text-gray-500">
                No pending volunteers.
              </p>


            ) : (


              <div className="space-y-4">


                {
                  volunteers.map((volunteer)=>(


                    <div
                      key={volunteer._id}
                      className="border rounded-2xl p-5 flex justify-between items-center"
                    >


                      <div>


                        <h3 className="font-semibold">
                          {volunteer.fullName}
                        </h3>


                        <p className="text-gray-500">
                          {volunteer.email}
                        </p>


                        <p className="text-gray-500">
                          {volunteer.phone}
                        </p>


                      </div>




                      <button

                        onClick={() =>
                          approveVolunteer(
                            volunteer._id
                          )
                        }

                        className="bg-green-600 text-white px-5 py-2 rounded-xl flex gap-2 items-center"

                      >

                        <CheckCircle size={18}/>

                        Approve

                      </button>



                    </div>


                  ))
                }


              </div>


            )
          }


        </div>


      </div>


    </div>

  );

}