import React from "react";
import { Avatar, Box, Icon, WrapItem } from "@chakra-ui/react";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";

export default function contatosCards(props) {
	return (
		<Box boxSize="380px" padding="50px" textAlign="center" fontWeight="bold">
			<h2>{props.nome}</h2>
			<Avatar name={props.nome} src={props.img} size="2xl" margin="20px" />
			<WrapItem flexDirection="row" alignItems="center" justifyContent="center">
				<a href={props.gitHub} target="_blank" rel="noreferrer">
					<Icon as={DiGithubBadge} boxSize="50" role="link" />
				</a>
				<a href={props.linkedIn} target="_blank" rel="noreferrer">
					<Icon as={AiFillLinkedin} boxSize="50" />
				</a>
			</WrapItem>
		</Box>
	);
}
