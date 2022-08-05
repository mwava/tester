import React from 'react';
import ContactItem from './ContactItem';

 
function ContactList({ contacts,onDelete,onArchive,contact }) {
  
 return (
   <div className="contact-list">
    
     {contacts.map((contact) => (
         <ContactItem 
         key={contact.id} 
         id={contact.id} 
         contact={contact}
         onDelete={onDelete}
         onArchive={onArchive} 
         {...contact} />
       ))
       
     }
   </div>
 );
}
 
export default ContactList;