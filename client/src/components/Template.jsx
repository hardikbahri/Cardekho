import React, { useEffect } from 'react';
// Google Fonts


// Favicon
import './assets/logo/favicon.png'; // Ensure this path is correct

// CSS files
import './assets/css/font-awesome.min.css';
import './assets/css/linearicons.css';
import './assets/css/flaticon.css';
import './assets/css/animate.css';
//import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/bootsnav.css';
import './assets/css/style.css';
import './assets/css/responsive.css';






function Template({ children }) {
  
	return (
    <html className="no-js" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
		
		<link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>
		<link href="https://fonts.googleapis.com/css?family=Rufina:400,700" rel="stylesheet"></link>
		<title>CarVilla</title>
		<link rel="shortcut icon" type="image/icon" href="assets/logo/favicon.png"/>
        {/* CSS imports */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
		<link rel="stylesheet" href="assets/css/font-awesome.min.css"/>

		<link rel="stylesheet" href="assets/css/linearicons.css"/>

		<link rel="stylesheet" href="assets/css/flaticon.css"/>

		
        <link rel="stylesheet" href="assets/css/animate.css"/>

       
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css"/>
		<link rel="stylesheet" href="assets/css/owl.theme.default.min.css"/>
		
     
        <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>
	
		<link rel="stylesheet" href="assets/css/bootsnav.css" />	

        <link rel="stylesheet" href="assets/css/style.css"/>
        

        <link rel="stylesheet" href="assets/css/responsive.css"></link>


        {/* Your other CSS imports */}
      </head>
      <body>
        {/* Common container classes */}
        <div className="container">
          {/* Render children components */}
          {children}
        </div>
        {/* Your common HTML content */}
      
		
	  </body>
    </html>
  );
}

export default Template;
