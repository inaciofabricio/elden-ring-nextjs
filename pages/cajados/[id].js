import { useRouter } from 'next/router';
import Item from '../../src/components/Item';

export default function CajadosPage() {

  const router = useRouter();

  const dados = {
    id: router?.query?.id,
    tipo : {
      id: "cajados",
      nome: "Cajados"
    }
  }

  return (
    <Item dados={dados} />
  )
}
