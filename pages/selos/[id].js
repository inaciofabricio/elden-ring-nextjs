import { useRouter } from 'next/router';
import Item from '../../src/components/Item';

export default function SelosPage() {

  const router = useRouter();

  const dados = {
    id: router?.query?.id,
    tipo : {
      id: "selos",
      nome: "Selos"
    }
  }

  return (
    <Item dados={dados} />
  )
}
