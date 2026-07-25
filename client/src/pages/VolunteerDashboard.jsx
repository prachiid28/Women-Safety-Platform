import { useEffect, useState } from "react";
import API from "../api/axios";
import { MapPin, AlertTriangle } from "lucide-react";


export default function VolunteerDashboard() {


  const [alerts, setAlerts] = useState([]);



  useEffect(()=>{

    fetchAlerts();

  },[]);




  const fetchAlerts = async()=>{

    try{

      const res = await API.get(
        "/alerts/volunteer"
      );


      setAlerts(
        res.data
      );


    }catch(error){

      console.log(
        error.response?.data || error.message
      );

    }

  };





  const acceptAlert = async(id)=>{

    try{


      await API.put(
        `/alerts/accept/${id}`
      );


      alert(
        "SOS accepted ✅"
      );


      fetchAlerts();


    }catch(error){

      console.log(
        error.response?.data || error.message
      );

    }

  };





  return (

    <div className="min-h-screen bg-gray-50 p-8">


      <div className="max-w-6xl mx-auto">


        <h1 className="text-3xl font-bold mb-8 flex gap-2 items-center">

          <AlertTriangle className="text-red-600"/>

          Volunteer Emergency Dashboard

        </h1>



        {
          alerts.length === 0 ? (

            <div className="bg-white rounded-2xl shadow p-6">

              No assigned SOS alerts.

            </div>


          ) : (


            <div className="space-y-5">


              {
                alerts.map((alert)=>(


                  <div
                    key={alert._id}
                    className="bg-white rounded-2xl shadow p-6"
                  >


                    <h2 className="text-xl font-bold">

                      {alert.userId?.fullName}

                    </h2>


                    <p>
                      📞 {alert.userId?.phone}
                    </p>



                    <p className="text-gray-600 mt-2">

                      {alert.description}

                    </p>



                    <div className="flex gap-2 mt-4 items-center">

                      <MapPin className="text-pink-600"/>

                      {alert.location.latitude},
                      {alert.location.longitude}

                    </div>



                    {
                      alert.status === "pending" && (

                        <button

                          onClick={()=>
                            acceptAlert(alert._id)
                          }

                          className="mt-5 bg-green-600 text-white px-5 py-2 rounded-xl"

                        >

                          Accept SOS

                        </button>

                      )
                    }



                  </div>


                ))
              }


            </div>


          )
        }



      </div>


    </div>

  );

}