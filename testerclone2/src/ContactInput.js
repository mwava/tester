import React from "react";
import {showFormattedDate} from './data'

class ContactInput extends React.Component{

    constructor(props){
        super(props);
        this.state={
            title:'',
            body:'',
            createdAt: showFormattedDate(),
            maxChar: 50
            
        }
            this.onTitleChangeHandler=this.onTitleChangeHandler.bind(this);
            this.onBodyChangeHandler=this.onBodyChangeHandler.bind(this);
            this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event){
        if(this.state.maxChar > 0){
            this.setState((x)=>{
                return{
                    title: event.target.value,
                    maxChar: x.maxChar - 1
                }
            })
        }
        
    }

    onBodyChangeHandler(event){
        this.setState((
            
        )=>{
            return{
                body: event.target.value
            }
        })
    }

    onSubmitHandler(event){
        event.preventDefault()

        this.props.addContact(this.state);
        this.setState(()=>{
            return{
                title: '',
                body: '',
                maxChar:50
            }
        })
    }

    render(){
        return(
            <form className="contact-input" onSubmit={this.onSubmitHandler}>
                <p>Sisa Karakter : {this.state.maxChar}</p>
                <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeHandler}></input>
                <textarea type="text" placeholder="Body" value={this.state.body} onChange={this.onBodyChangeHandler}></textarea>
                <button type="submit">Tambah</button>

            </form>
        )
    }
}


export default ContactInput