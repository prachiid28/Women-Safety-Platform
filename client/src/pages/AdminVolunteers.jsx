import { useEffect, useState } from "react";
import API from "../api/axios";


export default function AdminVolunteers() {

  const [volunteers, setVolunteers] = useState([]);

  const [loading, setLoading] = useState(false);



  useEffect(() => {

    fetchVolunteers();

  }, []);




  const fetchVolunteers = async () => {

    try {

      const res = await API.get(
        "/admin/volunteers"
      );

      setVolunteers(
        res.data
      );


    } catch(error) {

      console.log(
        error.response?.data || error.message
      );

    }

  };





  const approveVolunteer = async(id)=>{

    try {

      setLoading(true);


      const res = await API.put(
        `/admin/volunteers/approve/${id}`,
        {}
      );


      console.log(res.data);


      alert(
        "Volunteer approved successfully ✅"
      );


      fetchVolunteers();


    } catch(error) {


      console.log(
        error.response?.data || error.message
      );


      alert(
        "Approval failed ❌"
      );


    } finally {

      setLoading(false);

    }

  };





  return (

    <div className="min-h-screen bg-gray-50 p-8">


      <h1 className="text-3xl font-bold mb-6">
        Manage Volunteers
      </h1>



      <div className="bg-white rounded-2xl shadow overflow-hidden">


        <table className="w-full">


          <thead className="bg-pink-600 text-white">

            <tr>

              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Phone
              </th>

              <th className="p-4 text-left">
                Verified
              </th>

              <th className="p-4 text-left">
                Action
              </th>

            </tr>

          </thead>




          <tbody>


            {
              volunteers.map((volunteer)=>(


                <tr
                  key={volunteer._id}
                  className="border-b"
                >


                  <td className="p-4">
                    {volunteer.fullName}
                  </td>


                  <td className="p-4">
                    {volunteer.email}
                  </td>


                  <td className="p-4">
                    {volunteer.phone}
                  </td>



                  <td className="p-4">

                    {
                      volunteer.isVerified
                      ? "✅ Yes"
                      : "❌ No"
                    }

                  </td>




                  <td className="p-4">


                    {
                      !volunteer.isVerified && (

                        <button

                          onClick={() =>
                            approveVolunteer(
                              volunteer._id
                            )
                          }

                          disabled={loading}

                          className="bg-green-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"

                        >

                          {
                            loading
                            ? "Approving..."
                            : "Approve"
                          }

                        </button>

                      )
                    }


                  </td>


                </tr>


              ))
            }



          </tbody>


        </table>


      </div>


    </div>

  );

}