import { useRouter } from 'next/router';
import Item from '../../src/components/Item';

export default function MateriaisDeProducaoPage() {

  const router = useRouter();

  const dados = {
    id: router?.query?.id,
    tipo : {
      id: "materiais-de-producao",
      nome: "Materiais De Produção"
    }
  }

  return (
    <Item dados={dados} />
  )
}
