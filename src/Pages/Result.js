import React, { useEffect, useState } from "react";

import { ratingScale } from "../Component/Const";

export default function Result() {
    const [ratedData, setRatedData] = useState([]);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };
    useEffect(() => {
        const ratingPage1 = localStorage.getItem("page-1-rating");
        const ratingTimer1 = localStorage.getItem("page-1-timer");

        const ratingTimer2 = localStorage.getItem("page-2-timer");
        const ratingPage2 = localStorage.getItem("page-2-rating");

        const ratingPage3 = localStorage.getItem("page-3-rating");
        const ratingTimer3 = localStorage.getItem("page-3-timer");
        const data = [{
            name: "Overall Satisfaction",
            rating: ratingScale[ratingPage1],
            timer: formatTime(ratingTimer1)
        },
        {
            name: "Interest Rates and Fees",
            rating: ratingScale[ratingPage2],
            timer: formatTime(ratingTimer2)
        },
        {
            name: "Online and Mobile Banking",
            rating: ratingScale[ratingPage3],
            timer: formatTime(ratingTimer3)
        }];

        setRatedData(data);
    }, []);

    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-primary">
            <div className="d-flex justify-content-center align-items-center" >
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <h1>Result</h1>
                        </div>
                        <div className="row">
                            <h6 className="text-secondary">Your survey result available here</h6>
                        </div>

                        <table className="table mt-3">
                            <tbody>
                                {
                                    ratedData.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="text-start"><b>{item.name}</b></td>
                                                <td />
                                                <td />
                                                <td className="text-end"><b>{item.rating || "N/A"}</b></td>
                                                <td className="text-end"><b>{item.timer}</b></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
