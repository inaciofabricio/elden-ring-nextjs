import { useRouter } from 'next/router';
import Item from '../../src/components/Item';

export default function ItensImportantesPage() {

  const router = useRouter();

  const dados = {
    id: router?.query?.id,
    tipo : {
      id: "itens-importantes",
      nome: "Itens Importantes"
    }
  }

  return (
    <Item dados={dados} />
  )
}
