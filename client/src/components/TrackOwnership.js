import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Track = ({ contract, account, provider }) => {

    const [data, setData] = useState(null);

    const handleSubmit = async(event) => {
        event.preventDefault();
        let val = document.querySelector("#regNo").value;
        let arr = await contract.viewHistory(val);
        //console.log(val);
        console.log(arr);
        setData(arr);
    }
    return (
        <div>
          <div className="container" style={{ margin: "1cm", marginTop: '20px', position: 'relative', right: "2cm" }}>
            <div className="row">
              <div className="col-md-offset-1 col-md-6 col-sm-12">
                <div className="single-model-search">
                  <h1>Track Ownership of Vehicle</h1>
                  <form onSubmit={handleSubmit}>
                    <label>Enter car ID</label>
                    <input type="text" id="regNo" />
                    <input type="submit" className="welcome-btn model-search-btn" />
                  </form>
                  {data && data.map && (
                    data.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      
      
};


export default Track;