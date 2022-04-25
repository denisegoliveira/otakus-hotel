import React, { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import ClockLoader from "react-spinners/ClockLoader";
import Section from "./Section.jsx";

export default function Load(props) {
	// Loading state
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Wait for 5 seconds
		setTimeout(() => {
			setIsLoading(false);
		}, 5000);
	}, []);

	const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
    display: none;
    `;

	return (
		<>
			{isLoading ? (
				<>
					<Section />
					<PacmanLoader isLoading={isLoading} css={override} />
				</>
			) : (
				<h1 className="App">
					{props.component}
					{<ClockLoader isLoading={isLoading} css={override} />}
				</h1>
			)}
		</>
	);
}
