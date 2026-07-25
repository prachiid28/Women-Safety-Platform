import { useEffect, useState } from "react";
import { User, Save } from "lucide-react";

import API from "../api/axios";
import { useAuth } from "../context/AuthContext";


export default function Profile() {

  const { user } = useAuth();


  const [profile, setProfile] = useState({

    fullName: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    emergencyNote: ""

  });



  const [completion, setCompletion] = useState(0);



  useEffect(() => {

    if(user){

      setProfile({

        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phone || "",
        age: user.age || "",
        address: user.address || "",
        emergencyNote: user.emergencyNote || ""

      });

    }

  },[user]);



  useEffect(()=>{

    const fields = Object.values(profile);

    const filled = fields.filter(
      item => item !== ""
    ).length;


    setCompletion(
      Math.round(
        (filled / fields.length) * 100
      )
    );


  },[profile]);




  const updateProfile = async(e)=>{

    e.preventDefault();


    try{

      await API.put(
        "/users/profile",
        profile
      );


      alert("Profile Updated ✅");


    }
    catch(error){

      console.log(error);

    }

  };



  return (

    <div className="min-h-screen bg-pink-50 px-8 py-10">


      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow p-8">


        <div className="flex items-center gap-3">

          <User className="text-pink-600"/>

          <h1 className="text-3xl font-bold">

            Safety Profile

          </h1>

        </div>



        {/* Completion */}

        <div className="mt-6">


          <div className="flex justify-between mb-2">

            <span>
              Profile Completion
            </span>

            <span className="font-semibold">
              {completion}%
            </span>

          </div>



          <div className="bg-gray-200 rounded-full h-3">

            <div
              className="bg-pink-600 h-3 rounded-full"
              style={{
                width:`${completion}%`
              }}
            />

          </div>


        </div>




        <form
          onSubmit={updateProfile}
          className="mt-8 space-y-4"
        >


          <input
            className="w-full border rounded-xl px-4 py-3"
            placeholder="Full Name"
            value={profile.fullName}
            onChange={(e)=>
              setProfile({
                ...profile,
                fullName:e.target.value
              })
            }
          />



          <input
            className="w-full border rounded-xl px-4 py-3"
            placeholder="Email"
            value={profile.email}
            disabled
          />



          <input
            className="w-full border rounded-xl px-4 py-3"
            placeholder="Phone"
            value={profile.phone}
            onChange={(e)=>
              setProfile({
                ...profile,
                phone:e.target.value
              })
            }
          />



          <input
            className="w-full border rounded-xl px-4 py-3"
            placeholder="Age"
            value={profile.age}
            onChange={(e)=>
              setProfile({
                ...profile,
                age:e.target.value
              })
            }
          />



          <textarea

            className="w-full border rounded-xl px-4 py-3"

            placeholder="Address"

            value={profile.address}

            onChange={(e)=>
              setProfile({
                ...profile,
                address:e.target.value
              })
            }

          />



          <textarea

            className="w-full border rounded-xl px-4 py-3"

            placeholder="Emergency Notes"

            value={profile.emergencyNote}

            onChange={(e)=>
              setProfile({
                ...profile,
                emergencyNote:e.target.value
              })
            }

          />



          <button

            className="w-full bg-pink-600 text-white py-3 rounded-xl flex justify-center gap-2"

          >

            <Save size={20}/>

            Save Profile

          </button>


        </form>


      </div>


    </div>

  );

}