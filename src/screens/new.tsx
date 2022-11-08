import { Heading, VStack, Text, useToast } from "native-base";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { api } from "../services/api";

export function New() {
  const [title, setTitle] = useState("");
  const [isLoading, setIsUserLoading] = useState(false);

  const toast = useToast();

  async function handlePoolCreate() {
    if (!title.trim()) {
      return toast.show({
        title: "Informe o nome para o seu Bolao",
        placement: "top",
        bgColor: "red.500",
      });
    }
    try {
      setIsUserLoading(true);

      await api.post("/pools", { title });
      toast.show({
        title: "Bolao criado!",
        placement: "top",
        bgColor: "yellow.500",
      });
      setTitle("");
    } catch (error) {
      console.log(error);

      toast.show({
        title: "Nao possivel criar o Bolao!",
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsUserLoading(false);
    }
  }

  return (
    <VStack flex={1} bgColor="gray.900" p={7}>
      <Header title="Criar novo Bolao" />

      <VStack mt={8} mx={5} alignItems="center">
        <Logo />

        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          my={8}
          textAlign="center"
        >
          Crie seu proprio Bolao da Copa e compartilhe entre amigos!
        </Heading>

        <Input
          mb={2}
          placeholder="Qual e o nome do seu Bolao"
          onChangeText={setTitle}
          value={title}
        />
        <Button
          title="CRIAR MEU BOLAO"
          onPress={handlePoolCreate}
          isLoading={isLoading}
        />

        <Text color="gray.200" fontSize="sm" textAlign="center" px={10} mt={4}>
          Apos criar o seu bolao voce recebera um codigo unico que podera usar
          para convidar outras pessoas.
        </Text>
      </VStack>
    </VStack>
  );
}
