import React from "react";



 const BodySeacrh=({searchKey,onSearchChange})=>{


return(
    <div className="notes-search">
      <i className="fa-solid fa-magnifying-glass" />
      <input type="text" placeholder="Search Notes" value={searchKey} onChange={(e)=>onSearchChange(e)}></input>
    </div>
)

}


export default BodySeacrh