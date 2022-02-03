import React, { useState } from 'react';

export default function Count() {

    const [apiCount,setcount]=useState(0)
    const fetchfn =()=> {
    fetch("http://localhost:4000/getcount")
        .then(res=> res.json()).then(e=>{
            setcount(e)
        })}

    return (
        <div className='container mt-5 ' style={{'height':'80vh'}}>
            {fetchfn()}
            <center >
                <div className="card text-center">
                <div className="card-header">

                </div>
                <div className="card-body p-5">
                    <h1 className="card-title">API Count</h1>
                    <h3 className="card-text">{apiCount}</h3>

                </div>
                <div className="card-footer text-muted">

                </div>
            </div>
            </center>
            
        </div>);
}
