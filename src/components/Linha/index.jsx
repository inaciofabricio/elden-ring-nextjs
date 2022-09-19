
import { NovaLinha, Rotulo, Valor } from "./UI/index";

export default function Linha(params) { 
  return (
    <NovaLinha>
      <Rotulo>{ params?.rotulo }</Rotulo>
      <Valor>{ params?.valor }</Valor>
    </NovaLinha>
  )
}
