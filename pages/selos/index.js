import Listar from '../../src/components/Listar';

export default function SelosPage() {
  
  const dados = {
    id: "selos",
    nome: "selos",
    porTipo: true
  }

  return (
    <Listar dados={dados} />
  )
}
