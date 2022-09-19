import { useRouter } from 'next/router';
import Item from '../../src/components/Item';

export default function InformacoesPage() {

  const router = useRouter();

  const dados = {
    id: router?.query?.id,
    tipo : {
      id: "informacoes",
      nome: "Informações"
    }
  }

  return (
    <Item dados={dados} />
  )
}
