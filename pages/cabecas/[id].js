import { useRouter } from 'next/router';
import Item from '../../src/components/Item';

export default function CabecaPage() {

  const router = useRouter();

  const dados = {
    id: router?.query?.id,
    tipo : {
      id: "cabecas",
      nome: "Cabeça"
    }
  }

  return (
    <Item dados={dados} />
  )
}
