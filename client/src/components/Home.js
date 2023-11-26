import React, { useEffect } from "react"
import { useState } from "react";
import { ethers } from "ethers";
import Box from "./Box";
const Home = ({ contract, account, provider }) => {
   
    const [data, setData] = useState([]);

    const pay = async(event) => {
        let ele = event.target.parentElement;
        console.log(ele);
        let keemat = ele.querySelector(".cost").value;
        let carRegNo = ele.querySelector(".carid").value;
        console.log(carRegNo);
        console.log(keemat);
        await contract.raiseRequest(carRegNo, keemat, {value: ethers.utils.parseUnits(keemat, "ether")});
    }

    const fetchData = async () => {
        try {
          let dataArray = await contract.viewVehicles();
          
          if (dataArray.length > 0) {
            const listItems = dataArray.map((item, i) => {
              item = item.toString();
              const str_array = item.split(",");
              console.log(str_array);
              return (
                // <div style={{ height:'50px',width:'50px' }} key={i}>
                //   {str_array[0]}, {str_array[1]}{' '}
                //   <input type="hidden" className="cost" value={str_array[2]} />{' '}
                //   <input type="hidden" className="carid" value={str_array[0]} />{' '}
                //   <button onClick={pay}>PAY HERE</button>{' '}
                // </div>

              <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                <div className="single-featured-cars">
                  <div className="featured-img-box">
                    <div className="featured-cars-img">
                      <img src={"xyz"} />
                    </div>
                    <div className="featured-model-info">
                      <p>
                        {str_array[0]}{' '}
                        <span className="featured-mi-span">{item.mileage}</span>{' '}
                        <span className="featured-hp-span">{item.horsepower}HP</span>{' '}
                        {str_array[2]} ETH
                      </p>
                    </div>
                  </div>
                  <div className="featured-cars-txt">
                    <h2>
                      <a href="#">{item.brand} <span>{item.model}</span></a>
                    </h2>
                    <h3>Car name: {str_array[1]} </h3>
                    <p> Item description goes here Hellooooo</p>
                  </div>
                </div>
                <input type="hidden" className="cost" value={str_array[2]}/>
                <input type="hidden" className="carid" value={str_array[0]}/>
                <button onClick={pay}>PAY HERE</button>
              </div>
              );
            });
            setData(listItems);
            //console.log(listItems);
          } else {
            console.log("No data");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      // useEffect(() => {
      //   // Fetch data when the component mounts or whenever needed
      //   fetchData();
      // }, []);
    
		// Add more inputs as needed
	   // E
    return (
        <>
       {/* <Box items={inputsForFeatured} onButtonClick={fetchData} /> */}
       <div className="col-md-2 col-sm-12">
          <div className="single-model-search text-center">
            <button className="welcome-btn model-search-btn" onClick={fetchData}>
              Show Information
            </button>
          </div>
        </div>

        <div className="container">
          <div className="row">
              {data}
          </div>
        </div>


      
       
      
        </>
    )
};

export default Home;