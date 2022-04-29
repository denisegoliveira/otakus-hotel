import {
  Box,
  Stack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import InfoQuarto from "./InfoQuarto";

import luxo from "../../assets/images/quarto1.jpg";
import konoha from "../../assets/images/quarto5.jpg";
import premium from "../../assets/images/quarto6.jpg";

export default function Quartos() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
            Conheça nossos quartos
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Aproveite a melhor experiência em nosso hotel.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 12 }}
        py={10}>
        
      <InfoQuarto imagem={luxo} alt={"Luxo"} texto={"Luxo"} valor={89} />
      <InfoQuarto imagem={konoha} alt={"Suite"} texto={"Konoha"} valor={169} />
      <InfoQuarto imagem={premium} alt={"Premium"} texto={"Premium"} valor={229} />
      
      </Stack>
    </Box>
  );
}