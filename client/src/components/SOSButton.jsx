import { useState } from "react";

import API from "../api/axios";


export default function SOSButton() {

  const [loading, setLoading] = useState(false);


  const sendSOS = async () => {

    try {

      setLoading(true);


      navigator.geolocation.getCurrentPosition(
        async (position) => {


          await API.post("/alerts", {

            latitude:
              position.coords.latitude,

            longitude:
              position.coords.longitude,

            description:
              "Emergency SOS Alert"

          });


          alert("SOS Sent Successfully 🚨");


          setLoading(false);

        },

        () => {

          alert(
            "Location permission required"
          );

          setLoading(false);

        }

      );


    } catch (error) {

      alert("SOS Failed");

      setLoading(false);

    }

  };


  return (

    <button
      onClick={sendSOS}
      disabled={loading}
      style={{
        width: "180px",
        height: "180px",
        borderRadius: "50%",
        background: "#d90429",
        color: "white",
        border: "8px solid #ff758f",
        fontSize: "28px",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow:
          "0 0 25px rgba(217,4,41,0.6)"
      }}
    >

      {
        loading
          ? "Sending..."
          : "SOS"
      }


    </button>

  );

}