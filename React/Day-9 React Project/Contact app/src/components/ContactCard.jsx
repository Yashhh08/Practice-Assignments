import React from "react";
import axios from 'axios';

const ContactCard = (props)=>{

    const handleDelete = (id) => {

       axios.delete(`http://localhost:3001/contacts/${id}`).then((res)=>{
            console.log(res);
            props.deleteContact(id);
       })
       .catch((err)=>{
        console.log(err);
       })

    }

    return(
        <div>
            {props.contacts.map((contact)=>{
                return(
                    <div key={contact.id}>
                        {contact.id}. {contact.name} {contact.email}
                        <button onClick={()=>{handleDelete(contact.id)}}>delete</button>
                    </div>
                );
            })}
        </div>
    );

}

export default ContactCard;