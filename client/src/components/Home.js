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
          
          // if (dataArray.length > 0) {
          //   const listItems = dataArray.map((item, i) => {
          //     item = item.toString();
          //     const str_array = item.split(",");
          //     return (
          //       <div style={{ height:'50px',width:'50px' }} key={i}>
          //         {str_array[0]}, {str_array[1]}{' '}
          //         <input type="hidden" className="cost" value={str_array[2]} />{' '}
          //         <input type="hidden" className="carid" value={str_array[0]} />{' '}
          //         <button onClick={pay}>PAY HERE</button>{' '}
          //       </div>
          //     );
          //   });
            setData(dataArray);
          // } else {
          //   console.log("No data");
          // }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      useEffect(() => {
        // Fetch data when the component mounts or whenever needed
        fetchData();
      }, []);
      const inputsForFeatured = [
		{
            
            title: data[0],

          },
          
    
		// Add more inputs as needed
	  ]; // E
    return (
        <>
       <Box items={inputsForFeatured} onButtonClick={fetchData} />

      <div>
       
      
       
      </div>
        </>
    )
};

export default Home;