import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Box from "./Box";
function Navbar() {
    
	
	
		
	return (
        <>
		
		<section id="home" class="welcome-hero">

		
			<div class="top-area">
				<div class="header-area">
					
				    <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

				        <div class="container">

				           
				            <div class="navbar-header">
				                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
				                    <i class="fa fa-bars"></i>
				                </button>
				                <Link to="/home" class="navbar-brand" href="index.html">carvilla<span></span></Link>

				            </div>
                         

				          
				            <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
				                <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
				                    <li class=" scroll active" ><Link to="/home">home</Link></li>
				                    <li class=" scroll active"><Link to="/featured-cars">featured cars</Link></li>
				                    <li class=" scroll active"><Link to="/incoming">incoming requests</Link></li>
				                    <li class=" scroll active"><Link to="/add">add</Link></li>
				                    <li class=" scroll active"><Link to="/userdocs">userdocs</Link></li>
				                    <li class=" scroll active"><Link to="/track">track</Link></li>
				                    <li class=" scroll active"><Link to="/certify">certify</Link></li>
				                    
				                    
				                </ul>
                               
				            </div>
                          
				        </div>
                  
				    </nav>{/*/nav*/}
				    {/* End Navigation */}
				</div>{/*/.header-area*/}
			    <div class="clearfix"></div>

			</div>{/* /.top-area*/}
			{/* top-area End */}

			<div class="container">
				<div class="welcome-hero-txt">
					<h2>get your desired car at reasonable price</h2>
					<p>
						
					</p>
					
				</div>
			</div>

			

		</section>
		</>
)};

export default Navbar;