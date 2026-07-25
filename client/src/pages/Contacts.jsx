import { useEffect, useState } from "react";
import axios from "axios";
import { Phone, Plus, Trash2 } from "lucide-react";

export default function Contacts() {

  const [contacts, setContacts] = useState([]);

  const [newContact, setNewContact] = useState({
    name:"",
    phone:""
  });


  const token = localStorage.getItem("token");


  // Fetch contacts
  const fetchContacts = async()=>{

    try{

      const res = await axios.get(
        "http://localhost:5000/api/emergency-contacts",
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );


      setContacts(res.data);


    }catch(error){

      console.log(error);

    }

  };



  useEffect(()=>{

    fetchContacts();

  },[]);



  // Add contact
  const addContact = async()=>{


    if(!newContact.name || !newContact.phone)
      return;


    try{


      await axios.post(

        "http://localhost:5000/api/emergency-contacts",

        newContact,

        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }

      );


      setNewContact({
        name:"",
        phone:""
      });


      fetchContacts();



    }catch(error){

      console.log(error);

    }


  };




  // Delete contact
  const deleteContact = async(id)=>{


    try{


      await axios.delete(

        `http://localhost:5000/api/emergency-contacts/${id}`,

        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }

      );


      fetchContacts();



    }catch(error){

      console.log(error);

    }

  };




  return (

    <div className="min-h-screen bg-[#fff7f7] p-8">


      <h1 className="text-3xl font-bold text-pink-600">
        Emergency Contacts
      </h1>


      <p className="text-gray-600 mt-2">
        Add trusted people who can be contacted during emergencies.
      </p>



      <div className="mt-8 bg-white rounded-2xl shadow p-6 max-w-xl">


        <div className="flex gap-3">


          <input
          className="border rounded-lg p-3 flex-1"
          placeholder="Name"
          value={newContact.name}
          onChange={(e)=>
            setNewContact({
              ...newContact,
              name:e.target.value
            })
          }
          />



          <input
          className="border rounded-lg p-3 flex-1"
          placeholder="Phone"
          value={newContact.phone}
          onChange={(e)=>
            setNewContact({
              ...newContact,
              phone:e.target.value
            })
          }
          />



          <button
          onClick={addContact}
          className="bg-pink-500 text-white px-4 rounded-lg"
          >
            <Plus/>
          </button>


        </div>





        <div className="mt-6 space-y-3">


        {
          contacts.map(contact=>(


            <div
            key={contact._id}
            className="flex justify-between items-center bg-pink-50 p-4 rounded-xl"
            >


              <div>

                <h3 className="font-semibold">
                  {contact.name}
                </h3>


                <p className="flex items-center gap-2 text-gray-600">
                  <Phone size={16}/>
                  {contact.phone}
                </p>


              </div>




              <button
              onClick={()=>deleteContact(contact._id)}
              className="text-red-500"
              >

                <Trash2/>

              </button>


            </div>


          ))
        }


        </div>


      </div>


    </div>

  );

}