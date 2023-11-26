import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const Incoming = ({ contract, account, provider }) => {
    const [data, setData] = useState(null);

    const accept = async (event) => {
        let ele = event.target.parentElement;
        console.log(ele);
        let inputs = ele.querySelectorAll("input");
        let carId = inputs[0].value;
        let amt = inputs[1].value;
        console.log(carId);
        console.log(amt);
        await contract.acceptRequest(carId, amt);
    }

    const showIncoming = async () => {

        let dataArray = await contract.viewIncoming();
        console.log(dataArray);

        const isEmpty = Object.keys(dataArray).length === 0;
        if (!isEmpty) {
            console.log("found data");
            //dataArray = dataArray.toString();
            //console.log(dataArray);

            const listItems = dataArray.map((item, i) => {
                item = item.toString();
                console.log(item);
                const str_array = item.split(",");
                if (str_array[3] == 'false') {
                    return (
                        <>
                            <div>
                                <div className="container" style={{ margin: "1cm", marginTop: '20px', position: 'relative', right: "2cm" }}>
                                    <div className="row">
                                        <div className="col-md-offset-1 col-md-6 col-sm-12">
                                            <div className="single-model-search">
                                                <h1>Your incoming requests:-</h1>

                                                <ul>{data}</ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <li style={{ marginTop: '10px' }} key={i}> {str_array[0]}, {str_array[1]} <input type="hidden" value={str_array[0]} /><input type="hidden" value={str_array[2]} /> <button onClick={accept}>accept</button> </li>
                        </>
                    )
                }
                else {
                    return null;
                }
            });
            setData(listItems);
        }
        else {
            console.log("No data");
        }
    }
    return (
        <div>
            <div className="container" style={{ margin: "1cm", position: 'relative', right: "2cm" }}>
                <div className="row">
                    <div className="col-md-offset-1 col-md-6 col-sm-12">
                        <div className="single-model-search">
                            {/* <h1>Your incoming requests:-</h1> */}
                            <button onClick={showIncoming} className="welcome-btn model-search-btn">Show on sale cars</button>
                            <ul>{data}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Incoming;