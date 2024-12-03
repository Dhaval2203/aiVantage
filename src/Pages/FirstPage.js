import React from "react"
import { useNavigate } from "react-router-dom";

import customer_satisfaction from "../assets/Images/customer_satisfaction.png";

import GridientButton from "../Component/GridientButton";

export default function FirstPage() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/firstQuestion");
	};

	return (
		<div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-primary">
			<div className="container">
				<img
					src={customer_satisfaction}
					alt="Not Found"
					style={{ width: "10%", height: "10%" }}
				/>
				<div className="row">
					<h1 className="yellowColor">Credit Card <br />Customer Satisfaction Survey</h1>
				</div>
				<div className="row mt-4">
					<h4 className="lightBlueColor"> We value your feedback! At Gold Credit Card, we are dedicated to providing you with the best possible credit card experience. Your responses to this survey will help us understand what we"re doing well and where we can improve. The survey should take about 5 minutes to complete. Thank you for your time and valuable input!</h4>
				</div>
				<GridientButton handleClick={handleClick} buttonText={"Click to Start"} />
			</div>
		</div>
	)
}