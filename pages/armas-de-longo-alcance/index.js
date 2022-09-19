import Listar from '../../src/components/Listar';

export default function ArmasDeLongoAlcancePage() {

  const dados = {
    id: "armas-de-longo-alcance",
    nome: "Armas de Longo Alcance",
    porTipo: true
  }

  return (
    <Listar dados={dados} />
  )
}
