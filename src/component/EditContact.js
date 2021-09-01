import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {toast} from "react-toastify";

export const EditContact = () => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    const {id} = useParams();
    const contacts =useSelector(state => state);
    const currentContact = contacts.find((contact) => contact.id === parseInt(id));

    useEffect(()=>{
        if(currentContact){
            setName(currentContact.name)
            setEmail(currentContact.email)
            setNumber(currentContact.number)
        }
    },[currentContact])

    const checkEmail = contacts.find((contact)=>contact.id !==parseInt(id) && contact.email === email)
    //Below can also be solved using == instead of parseInt()
    const checkNumber = contacts.find((contact)=>contact.id !==parseInt(id) && contact.number ===parseInt( number))

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
        const data = {
            id: parseInt(id),
            name,
            number,
            email
        }
        dispatch({type:"UPDATE_CONTACT", payload: data})
        toast.success("Student data edited correctly!");
        history.push("/")
    }
    return (
        <div className = 'container'>
            {currentContact?(
                <>
                        <div className = 'row'>
                        <h1 className = 'display-3 my-5 text-center'>
                        Edit Student {parseInt(id) + 1}
                        </h1>
                        <div className="col-md-6 shadow mx-auto p-5">
                            <form >
                                <div className="form-group">
                                    <input type="text" placeholder= "Name" 
                                    className= "form-control"
                                    value = {name}
                                    onChange = {(e) =>setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="number" placeholder= "phone number"
                                    className= "form-control"
                                    value = {number}
                                    onChange = {(e) =>setNumber(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder= "Your email"
                                    className= "form-control"
                                    value = {email}
                                     onChange = {(e) =>setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Add Student" 
                                    className= "btn btn-dark "
                                    onClick = {submitHandler}
                                    />
                                    <Link to = '/' className= 'btn btn-danger ms-3 mt-1'>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div> 
                </>
            ):
            (
            <h1 className = 'display-3 my-5 text-center'>
                 Student with number {parseInt(id) + 1} does not exist
            </h1> 
            )
            }
            
        </div>
    )
}
