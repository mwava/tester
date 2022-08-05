import React from 'react';
import {showFormattedDate} from './data'
 
function ContactItemBody({ title,body,createdAt }) {
 return (
   <div className="cttn-body">
      <h2 className="catatan-profile_title">{title}</h2>
            <p className="catatan-profile_createdAt">{showFormattedDate(createdAt)}</p>
            <h4 className="catatan-profile_body">{body}</h4>
   </div>
 );
}
 
export default ContactItemBody;