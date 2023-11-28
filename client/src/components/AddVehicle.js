const AddVehicle = ({ contract, account, provider }) => {
    const handleSubmit = async (e) => {
      e.preventDefault();
      let v1 = document.querySelector("#one").value;
      let v2 = document.querySelector("#two").value;
      let v3 = document.querySelector("#three").value;
      let v4 = document.querySelector("#four").value;
      let v5 = document.querySelector("#five").value;


      const parsedValue = parseInt(v1, 10);
      const parsedValue2 = parseInt(v3, 10);
      const parsedValue3 = parseInt(v5, 10);
      if (isNaN(parsedValue) || parsedValue < 0 || v2==='' || isNaN(parsedValue2) || parsedValue2<=0 || isNaN(parsedValue3) || parsedValue3<0 || v4==='') {
        alert("Invalid details entered");
        window.location.reload();
      }

      console.log(v1, v2, v3, v4, v5);
      await contract.addVehicle(v1, v2, v3, v4, v5);
    };
  
    return (
        <div className="container" style={{ marginTop: '20px' ,margin:'40px',position:'relative',left:'4cm'}}>
        <div className="row">
          <div className="col-md-offset-1 col-md-6 col-sm-12">
            <div className="single-model-search">
              <h1 style={{ marginTop:'.5cm',position:'relative',bottom:'.7cm'}}>Add the vehicle</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="one">Enter ID</label>
                  <input type="number" id="one" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="two">Enter name of vehicle</label>
                  <input type="text" id="two" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="three">Enter price</label>
                  <input type="number" id="three" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="four">Enter image URL for vehicle</label>
                  <input type="text" id="four" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="five">Enter whether 2 or 4 wheel drive</label>
                  <input type="number" id="five" className="form-control" />
                </div>
                <button type="submit" className="welcome-btn model-search-btn">
                  Add Vehicle
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AddVehicle;
  