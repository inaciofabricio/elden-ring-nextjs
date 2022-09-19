import { useRouter } from 'next/router';
import Item from '../../src/components/Item';

export default function EscudosPage() {

  const router = useRouter();

  const dados = {
    id: router?.query?.id,
    tipo : {
      id: "escudos",
      nome: "Escudos"
    }
  }

  return (
    <Item dados={dados} />
  )
}
