import Listar from '../../src/components/Listar'; 

export default function EscudosPage() {

  const dados = {
    id: "escudos",
    nome: "Escudos",
    porTipo: true
  }

  return (
    <Listar dados={dados} />
  )
}
