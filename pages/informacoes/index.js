import Listar from '../../src/components/Listar'

export default function InformacoesPage() {

  const dados = {
    id: "informacoes",
    nome: "Informações",
    porTipo: true
  }

  return (
    <Listar dados={dados} />
  )
}
