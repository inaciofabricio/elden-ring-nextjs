import Listar from '../../src/components/Listar'

export default function FeiticosPage() {
  
  const dados = {
    id: "feiticos",
    nome: "Feiticos",
    porTipo: true
  }

  return (
    <Listar dados={dados} />
  )
}
