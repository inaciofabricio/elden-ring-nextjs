import { useRouter } from 'next/router';

import Item from '../../src/components/Item';

export default function CinzasDeGuerrasPage() {

  const router = useRouter();

  const dados = {
    id: router?.query?.id,
    tipo : {
      id: "cinzas-de-guerra",
      nome: "Cinzas de Guerra"
    }
  }

  return (
    <Item dados={dados} />
  )
}
