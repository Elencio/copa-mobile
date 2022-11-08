import { Heading, VStack } from "native-base";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

export function Find() {
  return (
    <VStack flex={1} bgColor="gray.900" p={7}>
      <Header title="Buscar por Codigo" showBackButton/>

      <VStack mt={8} mx={5} alignItems="center">
  
        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          textAlign="center"
          mb={8}
        >
          Encontrar um Bolao atraves do seu Codigo unico!
        </Heading>

        <Input mb={2} placeholder="Qual codigo do seu Bolao" />
        <Button title="BUSCAR BOLAO" />

        
      </VStack>
    </VStack>
  );
}
