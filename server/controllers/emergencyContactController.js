import EmergencyContact from "../models/EmergencyContact.js";


// Add contact
export const addContact = async(req,res)=>{

    try{

        const contact = await EmergencyContact.create({

            user:req.user.id,

            name:req.body.name,

            phone:req.body.phone

        });


        res.json(contact);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};




// Get contacts
export const getContacts = async(req,res)=>{

    try{

        const contacts =
        await EmergencyContact.find({
            user:req.user.id
        });


        res.json(contacts);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};




// Delete contact
export const deleteContact = async(req,res)=>{

    try{

        await EmergencyContact.findByIdAndDelete(
            req.params.id
        );


        res.json({
            message:"Contact deleted"
        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};