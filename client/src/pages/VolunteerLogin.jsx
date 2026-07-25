import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";


export default function VolunteerLogin(){

  const navigate = useNavigate();

  const { login } = useAuth();


  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");



  const handleLogin = async(e)=>{

    e.preventDefault();


    try{

     const res = await API.post(
  "/volunteers/login",
  {
    email,
    password
  }
);


      login(res.data);

      navigate("/volunteer");


    }catch(error){

      alert(
        error.response?.data?.message ||
        "Login failed"
      );

    }

  };



  return(

    <div className="min-h-screen flex items-center justify-center bg-[#fff7f7]">


      <form
      onSubmit={handleLogin}
      className="bg-white p-8 rounded-2xl shadow w-96"
      >


        <h1 className="text-2xl font-bold text-green-600 mb-6">
          Volunteer Login
        </h1>



        <input
        className="border p-3 w-full rounded mb-4"
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
        />



        <input
        className="border p-3 w-full rounded mb-4"
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        />



        <button
        className="bg-green-500 text-white w-full py-3 rounded"
        >
          Login
        </button>


      </form>


    </div>

  );

}