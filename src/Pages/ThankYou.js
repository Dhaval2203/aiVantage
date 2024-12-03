import React from "react"
import { useNavigate } from "react-router-dom";

import thanks from "../assets/Images/Thanks.png";

import GridientButton from "../Component/GridientButton";

export default function ThankYou() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/result");
    };

    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-primary">
            <div className="d-flex justify-content-center align-items-center" >
                <div className="card">
                    <div className="card-body">
                        <img
                            src={thanks}
                            alt="Not Found"
                            style={{ width: "10%", height: "10%" }}
                        />
                        <div className="row">
                            <h1>Thank You</h1>
                        </div>
                        <div className="row">
                            <h6 className="text-secondary"> Your answers have been sent.</h6>
                        </div>

                        <div className="row mt-4">
                            <h4>Thank you for taking the time to complete this survey. Your feedback is invaluable to us and helps us serve you better.</h4>
                        </div>
                        <GridientButton handleClick={handleClick} buttonText={"View Result"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
