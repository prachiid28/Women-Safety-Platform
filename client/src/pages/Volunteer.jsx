import { useEffect, useState } from "react";
import API from "../api/axios";
import { MapPin, CheckCircle } from "lucide-react";


export default function Volunteer(){

  const [alerts,setAlerts] = useState([]);


  const fetchAlerts = async()=>{

    try{

      const res = await API.get(
        "/alerts/volunteer"
      );

      console.log(
        "Volunteer Alerts:",
        res.data
      );

      setAlerts(res.data);


    }catch(error){

      console.log(
        error.response?.data || error.message
      );

    }

  };



  useEffect(()=>{

    fetchAlerts();

  },[]);




  const acceptAlert = async(id)=>{

    try{

      await API.put(
        `/alerts/accept/${id}`
      );


      window.alert(
        "SOS accepted successfully ✅"
      );


      fetchAlerts();


    }catch(error){

      console.log(
        error.response?.data || error.message
      );

    }

  };




  const resolveAlert = async(id)=>{

    try{


      const res = await API.put(
        `/alerts/resolve/${id}`
      );


      console.log(
        "Resolve Response:",
        res.data
      );


      window.alert(
        "Emergency resolved successfully ✅"
      );


      fetchAlerts();


    }catch(error){


      console.log(
        "Resolve Error:",
        error.response?.data || error.message
      );


    }

  };





  return (

    <div className="min-h-screen bg-[#fff7f7] p-8">


      <h1 className="text-3xl font-bold text-pink-600">
        Volunteer Dashboard
      </h1>


      <p className="text-gray-600 mt-2">
        Active emergency requests
      </p>




      <div className="mt-8 grid gap-5">


      {
        alerts.length === 0 ? (

          <div className="bg-white p-6 rounded-xl shadow">
            No active SOS alerts 🚨
          </div>


        ) : (


          alerts.map((item)=>(


            <div
              key={item._id}
              className="bg-white p-6 rounded-xl shadow"
            >


              <h2 className="font-bold text-lg">
                Emergency Alert 🚨
              </h2>



              <p className="text-gray-600 mt-2">

                User:
                {" "}
                {item.userId?.fullName || "Unknown"}

              </p>



              <p className="text-gray-600">

                📞 {item.userId?.phone}

              </p>




              <p className="flex gap-2 items-center mt-3">

                <MapPin size={18}/>

                {item.location?.latitude},
                {" "}
                {item.location?.longitude}

              </p>




              <p className="mt-3 font-semibold text-red-600">

                Status:
                {" "}
                {item.status}

              </p>




              <div className="flex gap-3 mt-4">


                <button

                  onClick={() =>
                    acceptAlert(item._id)
                  }

                  className="
                  bg-green-500
                  text-white
                  px-5
                  py-2
                  rounded-lg
                  flex
                  gap-2
                  items-center
                  hover:bg-green-600
                  "

                >

                  <CheckCircle size={18}/>

                  Accept Alert

                </button>




                <button

                  onClick={() =>
                    resolveAlert(item._id)
                  }

                  className="
                  bg-blue-600
                  text-white
                  px-5
                  py-2
                  rounded-lg
                  flex
                  gap-2
                  items-center
                  hover:bg-blue-700
                  "

                >

                  ✅ Resolve

                </button>


              </div>


            </div>


          ))

        )
      }


      </div>


    </div>

  );

}