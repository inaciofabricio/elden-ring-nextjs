import Listar from '../../src/components/Listar'

export default function CajadosPage() {
  
  const dados = {
    id: "cajados",
    nome: "Cajados",
    porTipo: false
  }

  return (
    <Listar dados={dados} />
  )

}
