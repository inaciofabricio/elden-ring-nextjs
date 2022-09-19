import Listar from '../../src/components/Listar';

export default function CinzasPage() {
  const dados = {
    id: "cinzas",
    nome: "Cinzas",
    porTipo: true
  }

  return (
    <Listar dados={dados} />
  )
}
