import { useRouter } from 'next/router';
import Item from '../../src/components/Item';

export default function ArmasCorpoACorpoPage() {

  const router = useRouter();

  const dados = {
    id: router?.query?.id,
    tipo : {
      id: "armas-corpo-a-corpo",
      nome: "Armas Corpo a Corpo"
    }
  }

  return (
    <Item dados={dados} />
  )
}
