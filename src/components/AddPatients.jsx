import React, { useState } from 'react'
import HospitalNav from './HospitalNav'
import axios from 'axios'

const AddPatients = () => {

    const [input,setInput] = new useState(
        {
            "id": "",
            "name": "",
            "age": "",
            "phnno": "",
            "address": "",
            "bloodgrp": "",
            "date": "",
            "disease": "",
            "prescription": ""
        }
    )
    const inputHandler = (event)=>{
        setInput(
            {...input,[event.target.name]:event.target.value}
        )
    }
    const readValues = ()=>{
        console.log(input)

        axios.post("http://localhost:3002/api/hospital/add",input).then(

            (response)=>{
                console.log(response.data)

                if (response.data.status == "success") {

                    alert("Successfully added")
                    setInput({
                        "id": "",
                        "name": "",
                        "age": "",
                        "phnno": "",
                        "address": "",
                        "bloodgrp": "",
                        "date": "",
                        "disease": "",
                        "prescription": ""
                    })
                    
                } else {
                    alert("Something went wrong")
                }
            }
        )
    }
  return (
    <div>

        <HospitalNav/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Id</label>
                            <input type="text" className="form-control" name="id" value={input.id} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Age</label>
                        <input type="text" className="form-control" name="age" value={input.age} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Phnone Number</label>
                        <input type="text" className="form-control" name="phnno" value={input.phnno} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Address</label>
                        <input type="text" className="form-control" name="address" value={input.address} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Blood Group</label>
                        <input type="text" className="form-control" name="bloodgrp" value={input.bloodgrp} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Date</label>
                        <input type="date" className="form-control" name="date" value={input.date} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Disease</label>
                        <input type="text" className="form-control" name="disease" value={input.disease} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Prescription</label>
                        <input type="text" className="form-control" name="prescription" value={input.prescription} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-info" onClick={readValues}>Add</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPatients

