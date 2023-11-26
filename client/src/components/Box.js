// import React from 'react';

// function Box({ inputs, onButtonClick }) {
//   return (
//     <div className="container">
//       <div className="row">
//         {inputs.map((input, index) => (
//           <div className="col-md-offset-1 col-md-2 col-sm-12" key={index}>
//             <div className="single-model-search">
//               <h2>{input.title}</h2>
//               <div className="model-select-icon">
//                 <select className="form-control">
//                   <option value="default">{input.placeholder}</option>
//                   {input.options.map((option, idx) => (
//                     <option value={option.value} key={idx}>
//                       {option.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>
//         ))}
//         <div className="col-md-2 col-sm-12">
//           <div className="single-model-search text-center">
//             <button className="welcome-btn model-search-btn" onClick={onButtonClick}>
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Box;



function Box({ items, onButtonClick }) {
  return (
    <div className="container">
      <div className="row">
        {items.map((item, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
            <div className="single-featured-cars">
              <div className="featured-img-box">
                <div className="featured-cars-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="featured-model-info">
                  <p>
                    {item.modelYear}{' '}
                    <span className="featured-mi-span">{item.mileage}</span>{' '}
                    <span className="featured-hp-span">{item.horsepower}HP</span>{' '}
                    {item.transmission}
                  </p>
                </div>
              </div>
              <div className="featured-cars-txt">
                <h2>
                  <a href="#">{item.brand} <span>{item.model}</span></a>
                </h2>
                <h3>{item.price}Hiiii</h3>
                <p>{item.description} Hellooooo</p>
              </div>
            </div>
          </div>
        ))}
        <div className="col-md-2 col-sm-12">
          <div className="single-model-search text-center">
            <button className="welcome-btn model-search-btn" onClick={onButtonClick}>
              Show Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
