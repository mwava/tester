import React from 'react';
import ContactItemBody from './ContactItemBody';
import ArchiveCatatan from './ArchiveCatatan';
import DeleteContact from './DeleteContact';
 
function ContactItem({ title,body,createdAt, archived,id,onDelete,onArchive }) {
 return (
   <div className="contact-item">
     <ContactItemBody title={title} body={body} createdAt={createdAt} archived={archived} />
     <DeleteContact id={id} onDelete={onDelete}/>
     <ArchiveCatatan id={id}  onArchive={onArchive} archived={archived}/>
   </div>
 );
}
 
export default ContactItem;