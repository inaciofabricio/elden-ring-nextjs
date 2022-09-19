import Listar from '../../src/components/Listar'

export default function MateriaisDeProducaoPage() {

  const dados = {
    id: "materiais-de-producao",
    nome: "Materiais De Produção",
    porTipo: false
  }

  return (
    <Listar dados={dados} />
  )
}
