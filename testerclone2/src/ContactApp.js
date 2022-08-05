import React from 'react';

import { getInitialData } from './data';
import ContactInput from './ContactInput';
import BodySeacrh from './BodySearch';
import ContactList from './ContactList';



class ContactApp extends React.Component{
  constructor(props){
    super(props);
      this.state={
        contacts : getInitialData(),
        searchContact:[],
        searchKey:''
      
               
        
      }
      this.onArchiveHandler=this.onArchiveHandler.bind(this);
      this.onDeleteHandler=this.onDeleteHandler.bind(this);
      this.onAddContactHandler = this.onAddContactHandler.bind(this);
      this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
      this.onSearchEventHandler=this.onSearchEventHandler.bind(this)
  }
  onDeleteHandler(id){
    const contacts = this.state.contacts.filter(contact =>contact.id !==id);
    this.setState({contacts})
  }
  onArchiveHandler(id){
    const contacts = this.state.contacts.map((contact) => contact.id === id ? {...contact, archived : !contact.archived} : contact)
    this.setState({ contacts });
  }
 
  onSearchChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchKey: event.target.value,
      };
    });
  this.onSearchEventHandler(event.target.value)
  }
  onSearchEventHandler(searchKey) {
    let searchContact = this.state.contacts.filter((contact) => contact.title.toLowerCase().includes(searchKey.toLocaleLowerCase()));

    if (this.state.searchKey.length >= 0) {
      this.setState({ searchContact: null });
      this.setState({ searchContact: searchContact });
    } else {
      this.setState({ searchContact: null });
      this.setState({ searchContact: this.state.contacts });
    }
  }
  onAddContactHandler({title,body}){
    let data = new Date()
    this.setState((prevState)=>{
      return{
        contacts:[
          ...prevState.contacts,
          {
            id: +new Date(),
        title ,
        body ,
        createdAt: data.toLocaleDateString() ,
        archived: false,
          }
        ],
        searchKey:[
          ...prevState.contacts,
          {
            id: +new Date(),
        title ,
        body ,
        createdAt: data.toLocaleDateString() ,
        archived: false,
          }
        ]
      }
    })
  }
 render(){
  let activeContact =  null
    let archiveContact =  null
   
 
    if (this.state.searchKey.length > 0) {
      activeContact = this.state.searchContact.filter((contact) => {return contact.archived === false});
      archiveContact = this.state.searchContact.filter((contact) => {return contact.archived === true});
    } else {
      activeContact = this.state.contacts.filter((contact) => {return contact.archived === false});
      archiveContact = this.state.contacts.filter((contact) => {return contact.archived === true});
    }
    return(
      <div className="contact-app">
        
   
   <BodySeacrh onSearchChange={this.onSearchChangeEventHandler} onSearchKey={this.state.searchKey}/>
   <h2>Tambah Kontak</h2>
   <ContactInput addContact={this.onAddContactHandler}/>
   <h2>Daftar Kontak</h2>
      {activeContact.length !== 0 ? (<ContactList searchKey={this.state.searchKey} searchContact={this.state.searchContact} contacts={activeContact}   onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />) :(<h2>KOSONG</h2> )}
    
     <h2>Daftar Kontak 2</h2>
     {archiveContact.length !== 0 ? (<ContactList searchKey={this.state.searchKey} searchContact={this.state.searchContact}  contacts={archiveContact}  onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />) :(<h2>KOSONG</h2>) }
   
 </div>
    )
  }
}

 
export default ContactApp;  