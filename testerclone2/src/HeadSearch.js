import React from "react";
import BodySeacrh from "./BodySearch";

const HeadSearch =({onSearchChange,searchTitle})=>{
    return (
        <div className='note-app__header'>
          <h1>Notes</h1>
          <BodySeacrh searchTitle={searchTitle} onSearchChange={onSearchChange} />
        </div>
      );
}

export default HeadSearch