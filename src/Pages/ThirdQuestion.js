import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Styles/Styles.css";

import GridientButton from "../Component/GridientButton.js";
import OneMinuteTimer from "../Component/OneMinuteTimer.js";
import StarRating from "../Component/StarRating.js";

export default function ThirdQuestion() {
    const [rating, setRating] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("page-3-rating", rating);
        localStorage.setItem("page-3-timer", timeLeft);
    }, [rating, setRating])

    const handleClick = () => {
        if (rating === 0) {
            localStorage.setItem("page-3-rating", "N/A");
            localStorage.setItem("page-3-timer", 0);
        }
        navigate("/thankYou");
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
                        <h5 className="card-title text-start">Online and Mobile Banking</h5>
                        <p className="card-text text-start">How would you rate your experience with our online and mobile banking services?</p>

                        <div className="container mt-3">
                            <StarRating rating={rating} setRating={setRating} />
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-sm mt-2">
                                    <GridientButton buttonText={"Next Question"} handleClick={() => handleClick()} />
                                </div>
                                <div className="col-sm fw-lighter mt-4">
                                    Remaining Question 3 / 3
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
