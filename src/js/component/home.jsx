import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="container-fluid bg-dark">
				<div className="container">
                   <Navbar/>
		        </div>
		   </div>
		 <div className="container mt-0">
		 <Jumbotron/>
		 <div className="container">
		 <div className="row d-flex justify-content-between pb-3">
		 <Card/>
		 <Card/>
		 <Card/>
		 <Card/>
		 </div>
		 </div>
		 </div>
		 <div className="container-fluid px-0">
		 <Footer/>
		 </div>
	    </div>
	);
};

export default Home;
