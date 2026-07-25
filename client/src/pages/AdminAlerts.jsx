import { useEffect, useState } from "react";
import API from "../api/axios";
import { MapPin, AlertTriangle } from "lucide-react";


export default function AdminAlerts() {


  const [alerts, setAlerts] = useState([]);

  const [volunteers, setVolunteers] = useState([]);

  const [selectedVolunteer, setSelectedVolunteer] = useState({});




  useEffect(()=>{

    fetchData();

  },[]);




  const fetchData = async()=>{

    try{

      const alertRes = await API.get(
        "/admin/alerts"
      );


      const volunteerRes = await API.get(
        "/admin/volunteers"
      );


      setAlerts(
        alertRes.data
      );


      setVolunteers(
        volunteerRes.data.filter(
          (v)=>v.isVerified
        )
      );


    }catch(error){

      console.log(
        error.response?.data || error.message
      );

    }

  };





  const assignVolunteer = async(
    alertId
  )=>{


    try{


      const volunteerId =
      selectedVolunteer[alertId];



      if(!volunteerId){

        alert(
          "Please select volunteer"
        );

        return;

      }



      await API.put(

        `/admin/alerts/assign/${alertId}`,

        {
          volunteerId
        }

      );



      alert(
        "Volunteer assigned successfully ✅"
      );


      fetchData();



    }catch(error){

      console.log(
        error.response?.data || error.message
      );

    }

  };





  return (

    <div className="min-h-screen bg-gray-50 p-8">


      <div className="max-w-7xl mx-auto">


        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">

          <AlertTriangle className="text-red-600"/>

          Emergency SOS Alerts

        </h1>




        {
          alerts.map((alert)=>(


            <div
              key={alert._id}
              className="bg-white rounded-2xl shadow p-6 mb-6"
            >


              <div className="flex justify-between">


                <div>

                  <h2 className="text-xl font-bold">

                    {alert.userId?.fullName}

                  </h2>


                  <p>
                    📞 {alert.userId?.phone}
                  </p>


                  <p className="text-gray-500">
                    {alert.description}
                  </p>


                </div>


                <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full h-fit">

                  {alert.status}

                </span>


              </div>




              <div className="flex gap-2 mt-4 items-center">

                <MapPin className="text-pink-600"/>

                {alert.location.latitude},
                {alert.location.longitude}

              </div>




              {
                alert.assignedVolunteer ? (

                  <p className="text-green-600 font-bold mt-4">

                    Assigned ✅

                  </p>


                ) : (


                  <div className="flex gap-4 mt-5">


                    <select

                      className="border rounded-lg px-4 py-2"

                      value={
                        selectedVolunteer[alert._id] || ""
                      }


                      onChange={(e)=>

                        setSelectedVolunteer({

                          ...selectedVolunteer,

                          [alert._id]:
                          e.target.value

                        })

                      }

                    >


                      <option value="">

                        Select Volunteer

                      </option>



                      {
                        volunteers.map((volunteer)=>(


                          <option

                            key={volunteer._id}

                            value={volunteer._id}

                          >

                            {volunteer.fullName}

                          </option>


                        ))
                      }


                    </select>




                    <button

                      onClick={()=>
                        assignVolunteer(
                          alert._id
                        )
                      }

                      className="bg-pink-600 text-white px-5 py-2 rounded-lg"

                    >

                      Assign

                    </button>


                  </div>


                )
              }



            </div>


          ))
        }


      </div>


    </div>

  );

}