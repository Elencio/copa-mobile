import { Center, Text, Icon } from "native-base";
import { useAuth } from "../hooks/useAuth";
import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";
import  Fontisto  from "@expo/vector-icons";
import { color } from "native-base/lib/typescript/theme/styled-system";

export function SignIn() {
  const {SignIn, isUserLoading} = useAuth();
  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <Logo width={212} height={40} />

      <Button
        title="ENTRAR COM O GOOGLE"
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        type="SECONDARY"
        mt={12}
        onPress={SignIn}
        isLoading={isUserLoading}
        _loading ={{_spinner: {color: 'white'}}}
      />

      <Text color="white" textAlign="center" mt={4}>
        Nao utilizaamos nenhuma imformacao alem do email pedido!
      </Text>
    </Center>
  );
}
