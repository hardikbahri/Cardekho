import React, { useEffect } from "react"
import { useState } from "react";
import { ethers } from "ethers";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./PDFFile";
const Certify = ({ contract, account, provider }) => {

    const [data, setData] = useState([]);
    const [elem, setElem] = useState(null);
    const [visEle, setVisEle] = useState(null);
    const getData = async() => {
        let obj = await contract.viewLatestTransac();
        let x = obj.id;
        x = x.toString();
        //console.log(obj);
        let newArr = [];
        newArr.push(obj);
        
        
        const toShow = newArr.map((item, i) => {
            console.log(item);
            return (
                 <PDFDownloadLink document={<PDFFile obj = {item} />} fileName="FORM">
                 {({loading})=> (loading ? <button>Loading document...</button> : <button>Download</button>)}
                </PDFDownloadLink>
            )
        });
        console.log(toShow);
        setVisEle(toShow);
    }
    
    return (
        <div>
            <div className="container" style={{margin:"1cm", marginTop: '20px' ,position:'relative',right:"2cm"}}>
        <div className="row">
          <div className="col-md-offset-1 col-md-6 col-sm-12">
            <div className="single-model-search">
            <h1>You can download certificate here</h1>
            <button onClick={getData} className="welcome-btn model-search-btn">Get data</button>
            <div>
                {visEle}
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Certify;


// <PDFDownloadLink document={<PDFFile obj = {data} />} fileName="FORM">
        //         {({loading})=> (loading ? <button>Loading document...</button> : <button>Download</button>)}
        // </PDFDownloadLink>