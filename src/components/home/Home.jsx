import React, { useState, useEffect } from "react";
import Banner from "../banner/Banner";
import Carousel from "../carousel/Carousel";
import BannerQuarto from "../banner-quartos/bannerQuartos/BannerQuartos.jsx";
import Cards from "../cards/cardsEvents/Card";
import Section from "../animation/Section";
import PacmanLoader from "react-spinners/PacmanLoader";
import ClockLoader from "react-spinners/ClockLoader";
export default function Home() {
	// Loading state
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Wait for 3 seconds
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
					<Carousel />
					<Banner />
					<BannerQuarto />
					<Cards />
					{<ClockLoader isLoading={isLoading} css={override} />}
				</h1>
			)}
		</>
	);
}
