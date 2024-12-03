import React, { useEffect, useState } from "react";

export default function StarRating(props) {
    const { rating, setRating } = props;

    const [imageUrl, setImageURL] = useState("../assets/Images/Star0.png")

    useEffect(() => {
        setImageURL(require(`../assets/Images/Star${rating}.png`))
    }, [rating]);

    const handleRatingChange = (rating) => {
        setRating(rating);
    };

    return (
        <div>
            <img
                src={imageUrl}
                alt={`Not Found for rating ${rating}`}
                style={{ width: "40%", height: "80px" }}
            />
            <div>
                {["Very Bad", "Bad", "Average", "Good", "Very Good"].map((rating, index) => (
                    <button
                        key={rating}
                        onClick={() => handleRatingChange(index + 1)}
                        className="btn btn-light"
                    >
                        {rating}
                    </button>
                ))}
            </div>
        </div>
    );
};
