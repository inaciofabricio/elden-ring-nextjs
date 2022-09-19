import { useRouter } from 'next/router';
import Item from '../../src/components/Item';

export default function FerramentasPage() {

  const router = useRouter();

  const dados = {
    id: router?.query?.id,
    tipo : {
      id: "ferramentas",
      nome: "Ferramentas"
    }
  }

  return (
    <Item dados={dados} />
  )
}
