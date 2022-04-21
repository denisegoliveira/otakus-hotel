import styles from "./Banner.module.css";
import { Features } from "./Icons";
import { Icon } from "@chakra-ui/react";
import { BiWifi, BiRestaurant, BiCar, BiCalendarEvent } from "react-icons/bi";
import { FaConciergeBell, FaHotel, FaSwimmingPool } from "react-icons/fa";

function Banner() {
	return (
		<div className={styles.banner_container}>
			<div className={styles.banner_texto}>
				<h1>
					Bem-vindo ao <span>Otaku's Hotel</span>
				</h1>
				<p>
					Possuimos um ambiente familiar dedicado ao naruto running, comer ramen
					e passar vergonha. Café da manhã, almoço e janta com pratos temáticos
					servidos por maids com gatinhos no ombro em nosso restaurante e um
					serviço de quarto com os melhores animes e mangás em nosso catálogo.
					Venha conhecer!
				</p>
			</div>

			<div className={styles.banner_icons}>
				<Features icon={<Icon as={FaConciergeBell} />} />
				<Features icon={<Icon as={FaHotel} />} />
				<Features icon={<Icon as={FaSwimmingPool} />} />
				<Features icon={<Icon as={BiWifi} />} />
				<Features icon={<Icon as={BiCar} />} />
				<Features icon={<Icon as={BiRestaurant} />} />
				<Features icon={<Icon as={BiCalendarEvent} />} />
			</div>
		</div>
	);
}

export default Banner;
