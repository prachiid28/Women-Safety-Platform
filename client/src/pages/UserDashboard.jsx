import { useEffect,useState } from "react";
import API from "../api/axios";
import { MapPin } from "lucide-react";


export default function UserDashboard(){

 const [alerts,setAlerts]=useState([]);


 useEffect(()=>{

   fetchAlerts();

 },[]);



 const fetchAlerts=async()=>{

  try{

    const res=await API.get(
      "/alerts/my"
    );

    setAlerts(res.data);


  }catch(error){

    console.log(
      error.response?.data || error.message
    );

  }

 };



 return(

 <div className="min-h-screen bg-[#fff7f7] p-8">


 <h1 className="text-3xl font-bold text-pink-600">
 My SOS History 🚨
 </h1>


 <div className="mt-8 space-y-5">


 {
 alerts.length===0 ?

 <div className="bg-white p-6 rounded-xl shadow">
 No SOS alerts found.
 </div>


 :

 alerts.map((item)=>(


 <div
 key={item._id}
 className="bg-white p-6 rounded-xl shadow"
 >


 <h2 className="font-bold text-lg">
 Emergency SOS Alert
 </h2>


 <p className="mt-2">
 Status:
 <span className="font-bold ml-2">
 {item.status}
 </span>
 </p>



 <p className="flex gap-2 mt-3">

 <MapPin size={18}/>

 {item.location.latitude},
 {item.location.longitude}

 </p>



 {
 item.assignedVolunteer &&

 <div className="mt-4 bg-green-50 p-4 rounded-lg">

 <p className="font-semibold">
 Volunteer Assigned
 </p>

 <p>
 {item.assignedVolunteer.fullName}
 </p>

 <p>
 📞 {item.assignedVolunteer.phone}
 </p>

 </div>

 }


 </div>


 ))

 }


 </div>


 </div>

 );

}