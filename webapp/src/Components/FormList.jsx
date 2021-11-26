import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiBaseURL } from '../Config';
import * as ReactBootStrap from "react-bootstrap";

export default function FormData() {
    const [customerList, setCustomerList] = useState([])

    async function retrieveForms() {
        await axios.get(`${apiBaseURL}/list`)
            .then(response => {
                console.log(response)
                setCustomerList(response.data.customerList);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const renderForms = (customer, index) => {
        return (
            <tr key={index}>
                <td>{customer.first_name}</td>
                <td>{customer.last_name}</td>
                <td>{customer.email}</td>
                <td>{customer.company}</td>
            </tr>
        )
    }
    useEffect(() => {
        retrieveForms();
    }, []);
    return (
        <div>
            <h2 className="text-center">Customer List</h2>
            <ReactBootStrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Customer</th>
                    </tr>
                </thead>
                <tbody>
                    {customerList.map(renderForms)}
                </tbody>
            </ReactBootStrap.Table>
        </div>
    )
}