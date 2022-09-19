
import { H3} from "../UI/index"; /* Geral */
import { Bloco, Linha, Rotulo, Valor } from "./UI/index"; /* Interno */

export default function Resistencia(params) { 
  return (
    <>
      {
        params?.dados && 
        <Bloco>
          <H3>Resistência:</H3>
          { 
            (params?.dados?.imunidade || params?.dados?.imunidade === 0) && 
            <Linha>
              <Rotulo>Imunidade:</Rotulo>
              <Valor>{ params?.dados?.imunidade }</Valor>
            </Linha>
          }
          { 
            (params?.dados?.robustez || params?.dados?.robustez === 0) && 
            <Linha>
              <Rotulo>Robustez:</Rotulo>
              <Valor>{ params?.dados?.robustez }</Valor>
            </Linha>
          }
          {
            (params?.dados?.foco || params?.dados?.foco === 0) &&
            <Linha>
              <Rotulo>Foco:</Rotulo>
              <Valor>{ params?.dados?.foco }</Valor>
            </Linha>
          }
          { 
            (params?.dados?.vitalidade || params?.dados?.vitalidade === 0) &&
            <Linha>
              <Rotulo>Vitalidade:</Rotulo>
              <Valor>{ params?.dados?.vitalidade }</Valor>
            </Linha>
          }
          { 
            (params?.dados?.equilibrio || params?.dados?.equilibrio === 0) &&
            <Linha>
              <Rotulo>Equilíbrio:</Rotulo>
              <Valor>{ params?.dados?.equilibrio }</Valor>
            </Linha>
          }          
        </Bloco>
      }
    </>
  )

}
