import React from 'react'

const DeleteContact=({id,onDelete})=>{
return <button className='contact-item_delete' onClick={()=>{onDelete(id)}}>X</button>
}

export default DeleteContact;