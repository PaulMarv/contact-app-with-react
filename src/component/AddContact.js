import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {toast} from "react-toastify";

export const AddContact = () => {
    const contacts = useSelector(state => state)
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    const checkEmail = contacts.find((contact)=>contact.email === email && email)
    //Below can also be solved using == instead of parseInt()
    const checkNumber = contacts.find((contact)=>contact.number ===parseInt( number))

    const dispatch = useDispatch()
    const history = useHistory()
    const submitHandler = (e)=>{
        e.preventDefault()
        if(!name || !number || !email){
            return toast.warning("Fill all blank spaces!")
        }
        if(checkEmail){
            return toast.error("This e-mail already exist!")
        }
        if(checkNumber){
            return toast.error("This number already exist!")
        }
        let myId = 1;
        if (contacts.length>0) {
            myId = contacts[contacts.length-1].id + 1;
        }
        const data = {
            id: myId,
            name,
            number,
            email
        }
        dispatch({type:"ADD_CONTACT", payload: data})
        toast.success("Student added correctly!");
        history.push("/")
    }


    return (
        <div className = 'container'>
            <div className = 'row'>
                <h1 className = 'display-3 my-5 text-center'>
                Add Student
                </h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit = {submitHandler}>
                        <div className="form-group">
                            <input type="text" placeholder= "Name" 
                            value = {name}
                            onChange = {(e) =>setName(e.target.value)}
                            className= "form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input type="number" placeholder= "phone number"
                            value = {number}
                            onChange = {(e) =>setNumber(e.target.value)}
                             className= "form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder= "Your email"
                            value = {email}
                            onChange = {(e) =>setEmail(e.target.value)}
                            className= "form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Add Student" 
                            className= "btn w-100 btn-dark mt-1"/>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    )
}
