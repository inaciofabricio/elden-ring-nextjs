import { useRouter } from 'next/router';
import Item from '../../src/components/Item';

export default function CinzasPage() {

  const router = useRouter();

  const dados = {
    id: router?.query?.id,
    tipo : {
      id: "cinzas",
      nome: "Cinzas"
    }
  }

  return (
    <Item dados={dados} />
  )
}
