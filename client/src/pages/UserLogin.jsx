import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";


export default function UserLogin(){

  const navigate = useNavigate();

  const { login } = useAuth();


  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");



  const handleLogin = async(e)=>{

    e.preventDefault();


    try{

      const res = await API.post(
        "/users/login",
        {
          email,
          password
        }
      );


      if(res.data.user.role !== "user"){

        alert("Please use correct login");

        return;

      }


      login(res.data);

      navigate("/dashboard");


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

        <h1 className="text-2xl font-bold text-pink-600 mb-6">
          User Login
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
        className="bg-pink-500 text-white w-full py-3 rounded"
        >
          Login
        </button>


      </form>


    </div>

  )

}