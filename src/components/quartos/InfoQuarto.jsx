import {
    Box,
    Image,
    Text,
    HStack,
    VStack,
    List,
    ListItem,
    ListIcon,
  } from '@chakra-ui/react';
  import { FaCheckCircle } from 'react-icons/fa';


  export default function Teste({ imagem, alt, texto, valor }) {
    return (
        <Box
          maxW={'300px'}
          w={'full'}
          bg={'white'}
          rounded={'lg'}
          overflow={'hidden'}
          >
          <Image
            h={'180px'}
            w={'full'}
            src={imagem}
            alt={alt}
            objectFit={'cover'}
          />
  <VStack py={2} px={12}>
  <Text fontWeight="700" fontSize="3xl" color="Orange.600">
    {texto}
  </Text>
  <HStack justifyContent="center">
    <Text fontSize="2xl" fontWeight="600">
      R$
    </Text>
    <Text fontSize="3xl" fontWeight="800">
      {valor}
    </Text>
    <Text fontSize="2xl" color="gray.500">
      /diária
    </Text>
  </HStack>
</VStack>
<VStack
  py={4}
  bg={'gray.100'}
  >
  <List spacing={3} textAlign="start" px={12}>
    <ListItem>
      <ListIcon as={FaCheckCircle} color="green" />
      Ar condicionado
    </ListItem>
    <ListItem>
      <ListIcon as={FaCheckCircle} color="green" />
      Frigobar
    </ListItem>
    <ListItem>
      <ListIcon as={FaCheckCircle} color="green" />
      Tv a cabo
    </ListItem>
  </List>
  <Box w="80%" pt={7}>
    {/* <Button /> */}
  </Box>
</VStack>
        </Box>
    );
  }