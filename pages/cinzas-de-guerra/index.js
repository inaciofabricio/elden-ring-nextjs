import Listar from '../../src/components/Listar';

export default function CinzasDeGuerraPage() {
  
  const dados = {
    id: "cinzas-de-guerra",
    nome: "Cinzas de Guerra",
    porTipo: true
  }

  return (
    <Listar dados={dados} />
  )
}
