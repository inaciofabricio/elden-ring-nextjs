import Listar from '../../src/components/Listar';

export default function CabecaPage() {

  const dados = {
    id: "cabecas",
    nome: "Cabeça",
    porTipo: false
  }

  return (
    <Listar dados={dados} />
  )

}
