import React, { useEffect } from "react";
import timerImage from '../assets/Images/Timer.png';

const OneMinuteTimer = (props) => {
	const { timeLeft, setTimeLeft } = props;

	useEffect(() => {
		if (timeLeft <= 0) return;
		const timer = setInterval(() => {
			setTimeLeft((prevTime) => prevTime - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft]);

	// const resetTimer = () => {
	// 	setTimeLeft(60); 
	// };

	const formatTime = (time) => {
		const hours = Math.floor(time / 3600);
		const minutes = Math.floor((time % 3600) / 60);
		const seconds = time % 60;

		return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
	};

	return (
		<div className="row">
			<div className="col-4 text-end">
				<img
					src={timerImage}
					alt="Not Found"
					className="mt-4"
					style={{ width: '40%', height: '40%' }}
				/>
				{/* <i className="fa-regular fa-clock mt-3 text-secondary" style={{ fontSize: "30px" }}></i> */}
			</div>
			<div className="col-8 text-start">
				<div className="row">
					<h6>Time Remaining</h6>
					<h2>{formatTime(timeLeft)}</h2>
				</div>
			</div>
		</div>
	);
};

export default OneMinuteTimer;
