import Listar from '../../src/components/Listar'

export default function FerramentasPage() {
  
  const dados = {
    id: "ferramentas",
    nome: "Ferramentas",
    porTipo: false
  }

  return (
    <Listar dados={dados} />
  )
}
