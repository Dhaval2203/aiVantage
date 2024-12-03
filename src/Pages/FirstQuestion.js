import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Styles/Styles.css";

import SmileyRating from "../Component/SmileyRating.js";
import OneMinuteTimer from "../Component/OneMinuteTimer.js";
import GridientButton from "../Component/GridientButton.js";

export default function FirstQuestion() {
    const [rating, setRating] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("page-1-rating", rating);
        localStorage.setItem("page-1-timer", timeLeft);
    }, [rating, setRating])

    const handleClick = () => {
        if (rating === 0) {
            localStorage.setItem("page-1-rating", "N/A");
            localStorage.setItem("page-1-timer", 0);
        }
        navigate("/secondQuestion");
    };

    useEffect(() => {
        if (timeLeft === 0) {
            handleClick();
        }
    }, [timeLeft])

    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-primary">
            <div className="d-flex justify-content-center align-items-center" >
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-start">Overall Satisfaction</h5>
                        <p className="card-text text-start">How satisfied are you with your overall experience with our credit card?</p>

                        <div className="container mt-3">
                            <SmileyRating rating={rating} setRating={setRating} />
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-sm mt-2">
                                    <GridientButton buttonText={"Next Question"} handleClick={() => handleClick()} />
                                </div>
                                <div className="col-sm fw-lighter mt-4">
                                    Remaining Question 1 / 3
                                </div>
                                <div className="col-sm">
                                    <OneMinuteTimer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
