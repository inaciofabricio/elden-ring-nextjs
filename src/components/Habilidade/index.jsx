
import { H2 } from "../UI/index";
import Linha from "../Linha";
import Descricao from "../Descricao";

export default function Habilidade(params) { 
  return (
    <>
      {
        params?.habilidade && 
        <>
          <H2>Habilidade:</H2>
          {
            params?.habilidade?.nome &&
            <Linha rotulo="Nome:" valor={params?.habilidade?.nome} />
          }
          {
            params?.habilidade?.custoPf &&
            <Linha rotulo="Curso PF:" valor={params?.habilidade?.custoPf} />
          }
          {
            params?.habilidade?.descricoes && 
            <Descricao rotulo="Descrição da Habilidade:" lista={params?.habilidade?.descricoes} />
          }
        </>
      }
    </>
  )

}
