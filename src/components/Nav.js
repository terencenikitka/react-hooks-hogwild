import React from "react";
import piggy from "../assets/porco.png";

const Nav = () => {
	function sortClick(){
		
	}
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<button onClick={sortClick}>Click Me! </button>
		</div>
	);
};

export default Nav;
