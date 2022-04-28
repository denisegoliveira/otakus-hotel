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
					Um ambiente seguro para você e sua família, totalmente tematizado para
					a cultaura Otaku, onde Neko's Maids servem junto a gatinhos em seus
					ombros, aqui você pode assistir animes e ler seus mangás preferidos
					que são disponibilizados pelos próprio Hotel.
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
