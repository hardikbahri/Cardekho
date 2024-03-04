import React, { useEffect } from "react"
import { useState } from "react";
import { ethers } from "ethers";



const Social = ({ contract, account, provider }) => {

    const [data, setData] = useState([]);

    const fetchData =  async () => {
        try{
            let dataArray = await contract.viewPosts();

            if (dataArray.length > 0) {
                const listItems = dataArray.map((item, i) => {
                item = item.toString();
                const str_array = item.split(",");

                console.log(str_array);
                return (
                    <div>
                        <h4>Title: {str_array[2]}</h4>
                        <h6>Written By: {str_array[1]}</h6>
                        <p>{str_array[3]}</p>
                    </div>
                )
                });
                setData(listItems);
                //console.log(listItems);
            } else {
                console.log("No data");
            }
        } catch(error){
            console.log("Error fetching data", error);
        }
    };

    const handleSubmit = async (e) => {
        let v1 = document.querySelector("#authorname").value;
        let v2 = document.querySelector("#title").value;
        let v3 = document.querySelector("#content").value;
        await contract.addPosts("abc", v1, v2, v3);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter name</label>
                <input type="text" id="authorname"/>
                <label>Enter title of post</label>
                <input type="text" id="title"/>
                <label>Enter content</label>

                <textarea id="content" name="w3review" rows="4" cols="50">

                </textarea>
                
               <button type="submit">Post</button>
            </form>
            <div style={{height: "20px"}}></div>

            <button className="welcome-btn model-search-btn" onClick={fetchData}>
            Show Information
          </button>
          
            <div className="posts">
                {data}  
            </div>
        </div>
    )
};


export default Social;