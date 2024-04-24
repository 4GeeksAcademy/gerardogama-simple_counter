//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
import PropTypes from "prop-types"


export const SecondsCounter = (props) => {
    return(
		<div className="counter rounded d-flex justify-content-center mt-5">
			<div className="clock mx-4">
              <i class="fa-regular fa-clock"></i>
                </div>
			<div className="first">{props.firstDigit %10}</div>
			<div className="second mx-4">{props.secondDigit %10}</div>
			<div className="third">{props.thirdDigit %10}</div>
			<div className="fourth mx-4">{props.fourthDigit %10}</div>
			<div className="fifth">{props.fifthDigit %10}</div>
			<div className="sixth mx-4">{props.sixthDigit %10}</div>
		</div>
    )
}

let counter = 0;
setInterval(() => {
   const first = Math.floor(counter/100000);
   const second = Math.floor(counter/10000);
   const third = Math.floor(counter/1000);
   const fourth = Math.floor(counter/100);
   const fifth = Math.floor(counter/10);
   const sixth = Math.floor(counter/1);

   counter ++;
   
   ReactDOM.render(<SecondsCounter firstDigit = {first} secondDigit={second} thirdDigit = {third} fourthDigit= {fourth} fifthDigit = {fifth} sixthDigit = {sixth} />,
    document.querySelector("#app"));

}, 1000);