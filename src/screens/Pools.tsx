import { VStack, Icon, useToast, FlatList} from "native-base";
import { useEffect, useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import {useNavigation} from '@react-navigation/native'
import { api } from "../services/api";
import { PoolCard, PoolCardProps } from "../components/PoolCard";
import { Loading } from "../components/loading";



export function Pools() {
  const [isLoading, setIsLoading] = useState(true);
  const [pools, setPools] = useState<PoolCardProps[]>([]);
  const toast = useToast();
  const {navigate} = useNavigation();

  async function fetchPools() {
    try {
      setIsLoading(true);
      const response = api.get('/pools');

    } catch (error) {
      console.log(error)

      toast.show({
        title: 'Nao foi possivel carregar os Boloes',
        placement: 'top',
        bgColor: 'yellow.500'
      });

    } finally {
      setIsLoading(false);
    }
  }

  useEffect(()=> {
    fetchPools();
  }, [])

  return (
    <VStack flex={1} bgColor="gray.900" p={7}>
      <Header title="Meus Boloes" />
      <VStack
        mt={6}
        mx={5}
        borderBottomWidth={1}
        borderBottomColor="gray.600"
        pb={4}
        mb={4}
      >
        <Button
          title="BUSCAR BOLAO POR CODIGO"
          leftIcon={<Icon as={Octicons} name="search" color="black" size='md' />}
          onPress={() => navigate('find')}
        />
      </VStack>
     <Loading/>
    </VStack>
  );
}
