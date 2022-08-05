import React from 'react';
import HeadSearch from './HeadSearch';

class SearchKey extends React.Component{
 
  

  
  render(){
    return(
<div className='search-body-key'>
      <h1>Daftar book ngab</h1>
      <HeadSearch  onSearchChange={this.onSearchChangeEventHandler} searchKey={this.state.searchKey}/>
    </div>
    )
  }
}
  

export default SearchKey