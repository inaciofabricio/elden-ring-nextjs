import { useRouter } from 'next/router';
import Item from '../../src/components/Item';

export default function ArmasDeLongoAlcancePage() {

  const router = useRouter();

  const dados = {
    id: router?.query?.id,
    tipo : {
      id: "armas-de-longo-alcance",
      nome: "Armas de Longo Alcance"
    }
  }

  return (
    <Item dados={dados} />
  )
}
