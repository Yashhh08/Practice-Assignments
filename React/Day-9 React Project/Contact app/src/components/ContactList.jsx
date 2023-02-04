import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import ContactCard from "../components/ContactCard";
import { AddContactContext } from "../contexts/AddContactContext";

const ContactList = () => {
  const [contacts, SetContacts] = useState([]);

  const [remove,setRemove] = useState(false);

  const {added} = useContext(AddContactContext);


  useEffect(() => {
    axios
      .get("http://localhost:3001/contacts")
      .then((res) => {
        // console.log(res.data);
        SetContacts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [remove,added]);

  const deleteContact = (id)=>{
    setRemove(!remove);
  }

  console.log("contacts", contacts);

  return (
    <div>
      <div>
        <h2>Contact List</h2>

        <ContactCard contacts={contacts} deleteContact={deleteContact}/>
        
      </div>
    </div>
  );
};

export default ContactList;
