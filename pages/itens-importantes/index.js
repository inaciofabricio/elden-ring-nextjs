import Listar from '../../src/components/Listar';

export default function ItensImportantesPage() {

  const dados = {
    id: "itens-importantes",
    nome: "Itens Importantes",
    porTipo: false
  }

  return (
    <Listar dados={dados} />
  )
}
