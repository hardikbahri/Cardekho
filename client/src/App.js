//import './App.css';
import Upload from "./artifacts/contracts/Upload.sol/Upload.json"
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Route, Link, Routes } from 'react-router-dom';
import FileUp from './components/FileUp';
import Pay from "./components/Pay"
import Home from "./components/Home"
import Incoming from "./components/Incoming"
import AddVehicle from './components/AddVehicle';
import Track from "./components/TrackOwnership";
import Template from './components/Template';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Newcar from './components/Newcar';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Certify from './components/Certify';
import Box from "./components/Box";
import Social from "./components/Social"
function App() {

  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);



  return (


    <div className="App">
      <Template>
        <Navbar></Navbar>

        
        <Routes>
        <Route exact path="/" element={
            <div>
              <Service></Service>
              <h3>Your account address: {account}</h3>
              <Newcar></Newcar>
              <Featured></Featured>
            </div>
          } />
          <Route exact path="/home" element={
            <div>
              <h3 style={{marginTop:'1cm'}}>Your account address: {account}</h3>
              <Service></Service>
              <Newcar></Newcar>
              <Featured></Featured>
            </div>
          } />
          <Route exact path="/featured-cars" element={
            <div>
              <Featured />
              <Home account={account} provider={provider} contract={contract} />
            </div>
          } />
          <Route exact path="/incoming" element={<Incoming account={account} provider={provider} contract={contract} />} />
         
          <Route exact path="/userdocs" element={<FileUp account={account} provider={provider} contract={contract} />} />
          <Route exact path="/add" element={<AddVehicle account={account} provider={provider} contract={contract} />} />
          <Route exact path="/track" element={<Track account={account} provider={provider} contract={contract} />} />
          <Route exact path="/certify" element={<Certify account={account} provider={provider} contract={contract} />} />
          <Route exact path="/social" element={<Social account={account} provider={provider} contract={contract}/>} />
        </Routes>
        <Footer></Footer>

      </Template>
    </div>



  );
}

export default App;
