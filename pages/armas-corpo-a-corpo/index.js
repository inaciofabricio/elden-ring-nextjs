import Listar from '../../src/components/Listar';

export default function ArmasCorpoACorpoPage() {

  const dados = {
    id: "armas-corpo-a-corpo",
    nome: "Armas Corpo a Corpo",
    porTipo: true
  }

  return (
    <Listar dados={dados} />
  )
}
