import Listar from '../../src/components/Listar'

export default function MateriaisDeFortificacaoPage() {

  const dados = {
    id: "materiais-de-fortificacao",
    nome: "Materiais De Fortificação",
    porTipo: false
  }

  return (
    <Listar dados={dados} />
  )
}
