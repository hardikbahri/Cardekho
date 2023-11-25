import React from "react"

function Navbar() {
    return (
        
		<section id="home" class="welcome-hero">

		
			<div class="top-area">
				<div class="header-area">
					
				    <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

				        <div class="container">

				           
				            <div class="navbar-header">
				                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
				                    <i class="fa fa-bars"></i>
				                </button>
				                <a class="navbar-brand" href="index.html">carvilla<span></span></a>

				            </div>
                         

				          
				            <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
				                <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
				                    <li class=" scroll active"><a href="#home">home</a></li>
				                    <li class="scroll"><a href="#service">service</a></li>
				                    <li class="scroll"><a href="#featured-cars">featured cars</a></li>
				                    <li class="scroll"><a href="#new-cars">new cars</a></li>
				                    <li class="scroll"><a href="#brand">brands</a></li>
				                    <li class="scroll"><a href="#contact">contact</a></li>
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
					<h2>get your desired car in resonable price</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore   magna aliqua. 
					</p>
					<button class="welcome-btn" onclick="window.location.href='#'">contact us</button>
				</div>
			</div>

			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="model-search-content">
							<div class="row">
								<div class="col-md-offset-1 col-md-2 col-sm-12">
									<div class="single-model-search">
										<h2>select year</h2>
										<div class="model-select-icon">
											<select class="form-control">

											  	<option value="default">year</option>{/* /.option*/}

											  	<option value="2018">2018</option>{/* /.option*/}

											  	<option value="2017">2017</option>{/* /.option*/}
											  	<option value="2016">2016</option>{/* /.option*/}

											</select>{/* /.select*/}
										</div>{/* /.model-select-icon */}
									</div>
									<div class="single-model-search">
										<h2>body style</h2>
										<div class="model-select-icon">
											<select class="form-control">

											  	<option value="default">style</option>{/* /.option*/}

											  	<option value="sedan">sedan</option>{/* /.option*/}

											  	<option value="van">van</option>{/* /.option*/}
											  	<option value="roadster">roadster</option>{/* /.option*/}

											</select>{/* /.select*/}
										</div>{/* /.model-select-icon */}
									</div>
								</div>
								<div class="col-md-offset-1 col-md-2 col-sm-12">
									<div class="single-model-search">
										<h2>select make</h2>
										<div class="model-select-icon">
											<select class="form-control">

											  	<option value="default">make</option>{/* /.option*/}

											  	<option value="toyota">toyota</option>{/* /.option*/}

											  	<option value="holden">holden</option>{/* /.option*/}
											  	<option value="maecedes-benz">maecedes-benz.</option>{/* /.option*/}

											</select>{/* /.select*/}
										</div>{/* /.model-select-icon */}
									</div>
									<div class="single-model-search">
										<h2>car condition</h2>
										<div class="model-select-icon">
											<select class="form-control">

											  	<option value="default">condition</option>{/* /.option*/}

											  	<option value="something">something</option>{/* /.option*/}

											  	<option value="something">something</option>{/* /.option*/}
											  	<option value="something">something</option>{/* /.option*/}

											</select>{/* /.select*/}
										</div>{/* /.model-select-icon */}
									</div>
								</div>
								<div class="col-md-offset-1 col-md-2 col-sm-12">
									<div class="single-model-search">
										<h2>select model</h2>
										<div class="model-select-icon">
											<select class="form-control">

											  	<option value="default">model</option>{/* /.option*/}

											  	<option value="kia-rio">kia-rio</option>{/* /.option*/}

											  	<option value="mitsubishi">mitsubishi</option>{/* /.option*/}
											  	<option value="ford">ford</option>{/* /.option*/}

											</select>{/* /.select*/}
										</div>{/* /.model-select-icon */}
									</div>
									<div class="single-model-search">
										<h2>select price</h2>
										<div class="model-select-icon">
											<select class="form-control">

											  	<option value="default">price</option>{/* /.option*/}

											  	<option value="$0.00">$0.00</option>{/* /.option*/}

											  	<option value="$0.00">$0.00</option>{/* /.option*/}
											  	<option value="$0.00">$0.00</option>{/* /.option*/}

											</select>{/* /.select*/}
										</div>{/* /.model-select-icon */}
									</div>
								</div>
								<div class="col-md-2 col-sm-12">
									<div class="single-model-search text-center">
										<button class="welcome-btn model-search-btn" onclick="window.location.href='#'">
											search
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
		
)};

export default Navbar;