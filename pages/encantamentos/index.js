import Listar from '../../src/components/Listar';

export default function EncantamentosPage() {
  
  const dados = {
    id: "encantamentos",
    nome: "Encantamentos",
    porTipo: true
  }

  return (
    <Listar dados={dados} />
  )
}
