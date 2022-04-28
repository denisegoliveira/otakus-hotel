import { Box, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import ContatosCard from "./ContatosCards.jsx";

export default function Contatos() {
	return (
		<>
			<Wrap w="100%" h="100%" bg="gray.500" justify="center" marginTop="73px">
				<Box>
					<Heading
						size="4xl"
						textAlign="center"
						bg="grey.500"
						w="100%"
						margin="50px"
					>
						Conheça nossa equipe:{" "}
					</Heading>
				</Box>
				<WrapItem>
					<Wrap justify="center" w="100%">
						<WrapItem>
							<ContatosCard
								nome="Bruno Andreotti"
								img="https://media.discordapp.net/attachments/950508315081850883/955518260902768681/Design_sem_nome_1.png"
								linkedIn="https://www.linkedin.com/in/bruno-andreotti/"
								gitHub="https://github.com/brunoandreotti"
							/>
						</WrapItem>
						<WrapItem>
							<ContatosCard
								nome="Denise Oliveira"
								img="https://cdn.discordapp.com/attachments/950508315081850883/968579984656584765/IMG_4977.jpg"
								linkedIn="https://www.linkedin.com/in/denise-g-oliveira/"
								gitHub="https://github.com/denisegoliveira"
							/>
						</WrapItem>
						<WrapItem>
							<ContatosCard
								nome="Heitor Schumann"
								img="https://cdn.discordapp.com/attachments/950508315081850883/968591522587115610/ruim-removebg-preview.png"
								linkedIn="https://www.linkedin.com/in/heitorschumann/"
								gitHub="https://github.com/heitorschumann"
							/>
						</WrapItem>
						<WrapItem>
							<ContatosCard
								nome="Henrique Ferraz"
								img="https://cdn.discordapp.com/attachments/950508315081850883/968584321961189436/IMG-20220205-WA0011.jpg"
								linkedIn="https://www.linkedin.com/in/henrique-ferraz-a46123219/"
								gitHub="https://github.com/henriqueferrazo"
							/>
						</WrapItem>
						<WrapItem>
							<ContatosCard
								nome="Murilo Antunes"
								img="https://cdn.discordapp.com/attachments/950508315081850883/955519140402188288/1645710346276.jpg"
								linkedIn="https://www.linkedin.com/in/murilo-antunes-bb1143228/"
								gitHub="https://github.com/mjantunes2"
							/>
						</WrapItem>
					</Wrap>
				</WrapItem>
			</Wrap>
		</>
	);
}
