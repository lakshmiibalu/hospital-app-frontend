import React, { useState } from 'react'
import HospitalNav from './HospitalNav'
import axios from 'axios'

const SearchPatients = () => {
    
  
    const [data,setData] = useState([])
    const [input,setInput] = useState(
        {
            "id":""
        }
    )
    const inputHandler = (event)=>{
        setInput(
            {...input,[event.target.name]:event.target.value}
        )
    }
    const readValues = ()=>{
        console.log(input)
        axios.post("http://localhost:3002/api/hospital/search",input).then(
            (response)=>{
                setData(response.data)
                if (response.data.length == 0) {
                    
                    alert("not found")

                } else {
                    
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

                            <label htmlFor="" className="form-label">Patient Id</label>
                            <input type="text" className="form-control" name="id" value={input.id} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-info" onClick={readValues}>Search</button>
                        </div>

                            <br />
                            
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            {
                                data.map(
                                    (value,index)=>{
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                        <div class="card border-success mb-3">
                                        <div class="card-header bg-transparent border-success"></div>
                                        <div class="card-body text-success">
                                            
                                            <p class="card-text">Name : {value.name}</p>
                                            <p class="card-text">Age : {value.age}</p>
                                            <p class="card-text">Date : {value.date}</p>
                                            <p class="card-text">Disease : {value.disease}</p>
                                            
                                        </div>
                                        <div class="card-footer bg-transparent border-success"></div>
                                        </div>
                
                                        </div>
                                    
                                    }
                                )
                            }

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

       
               
        
    </div>
  )
}

export default SearchPatients