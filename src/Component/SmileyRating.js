import React from 'react';
import '../assets/Styles/Styles.css'

const SmileyRating = (props) => {
    const { rating, setRating } = props

    const smileys = [
        { emoji: '😞', label: 'Very Bad' },
        { emoji: '😐', label: 'Bad' },
        { emoji: '😊', label: 'Average' },
        { emoji: '😁', label: 'Good' },
        { emoji: '😍', label: 'Very Good' },
    ];

    const handleHover = (index) => {
        setRating(index + 1);
    };

    const handleClick = (index) => {
        setRating(index + 1);
    };

    return (
        <div className="container">
            <div className="smiley-rating">
                {smileys.map((smiley, index) => (
                    <span
                        key={index}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleHover(rating - 1)}
                        className={`smiley ${rating >= index + 1 ? 'selected' : ''}`}
                        style={{
                            fontSize: '3rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            margin: '0 10px',
                        }}
                    >
                        {smiley.emoji}
                    </span>
                ))}
            </div>
            <div className="rating-text">
                <p>{rating > 0 ? smileys[rating - 1].label : 'Hover over a smiley to rate'}</p>
            </div>
        </div>
    );
};

export default SmileyRating;
