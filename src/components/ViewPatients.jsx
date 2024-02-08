import React, { useEffect, useState } from 'react'
import HospitalNav from './HospitalNav'
import axios from 'axios'

const ViewPatients = () => {
    const [data,setData] = new useState([])
    const getData = ()=>{
        axios.get("http://localhost:3002/api/hospital/view").then(
            (response)=>{
                setData(response.data)}
        )
    }
    useEffect(()=>{getData()},[])
  return (
    <div>

        <HospitalNav/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table table-bordered">
                <thead>
                    <tr>
                    
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Address</th>
                    <th scope="col">Blood Group</th>
                    <th scope="col">Date</th>
                    <th scope="col">Disease</th>
                    <th scope="col">Prescription</th>

                    </tr>
                </thead>
                <tbody>
                    
                    {
                        data.map(
                            (value,index)=>{
                                return <tr>
                    
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td>{value.phnno}</td>
                                <td>{value.address}</td>
                                <td>{value.bloodgrp}</td>
                                <td>{value.date}</td>
                                <td>{value.disease}</td>
                                <td>{value.prescription}</td>
            
                                </tr>
                            }
                        )
                    }

                </tbody>
                </table>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewPatients