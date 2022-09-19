import { useRouter } from 'next/router';
import Item from '../../src/components/Item';

export default function FeiticosPage() {

  const router = useRouter();

  const dados = {
    id: router?.query?.id,
    tipo : {
      id: "feiticos",
      nome: "Feiticos"
    }
  }

  return (
    <Item dados={dados} />
  )
}
