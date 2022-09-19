import { useRouter } from 'next/router';
import Item from '../../src/components/Item';

export default function MateriaisDeFortificacaoPage() {

  const router = useRouter();

  const dados = {
    id: router?.query?.id,
    tipo : {
      id: "materiais-de-fortificacao",
      nome: "Materiais De Fortificação"
    }
  }

  return (
    <Item dados={dados} />
  )
}
