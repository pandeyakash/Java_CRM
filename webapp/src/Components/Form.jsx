import React, { useState } from 'react';
import axios from 'axios';
import { apiBaseURL } from '../Config';

export default function Form(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !company ) alert("Some Fields cannot be blank");
        else {
            const payLoad = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                company: company,
            }
            // console.log(data);
            axios.post(`${apiBaseURL}/add`, payLoad, {
                headers : {
                    "Content-Type": "application/json",
                }
            }).then((res)=>{
                console.log(res);
                setFirstName("");
                setLastName("");
                setEmail("");
                setCompany("");
                alert("Form Successfully Submited");
            }).catch((err)=>{
                alert("error");
            })
        }
    }

    return (
        <div className="container w-50 py-5">
            <h3 className="text-center">
                Form
            </h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }}
                        className="form-control" id="firstname" />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }}
                        className="form-control" id="lastname" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }}
                        className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Company</label>
                    <input type="text" value={company} onChange={(e) => { setCompany(e.target.value) }}
                        className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}