
import { H3 } from "../UI/index";
import { Bloco, Linha, Rotulo, Valor } from "./UI/index";

export default function PoderDeAtaque(params) { 
  return (
    <>
      {
        params?.dados && 
        <Bloco>
          <H3>Poder de Ataque:</H3>
          { 
            (params?.dados?.fisico || params?.dados?.fisico === 0) &&
            <Linha>
              <Rotulo>Físico:</Rotulo>
              <Valor>{ params?.dados?.fisico }</Valor>
            </Linha>
          }
          { 
            (params?.dados?.magico || params?.dados?.magico === 0) &&
            <Linha>
              <Rotulo>Mágico:</Rotulo>
              <Valor>{ params?.dados?.magico }</Valor>
            </Linha>
          }
          { 
            (params?.dados?.fogo || params?.dados?.fogo === 0) &&
            <Linha>
              <Rotulo>Fogo:</Rotulo>
              <Valor>{ params?.dados?.fogo }</Valor>
            </Linha>
          }
          { 
            (params?.dados?.relampago || params?.dados?.relampago === 0) &&
            <Linha>
              <Rotulo>Relâmpago:</Rotulo>
              <Valor>{ params?.dados?.relampago }</Valor>
            </Linha>
          }          
          { 
            (params?.dados?.sagrado || params?.dados?.sagrado === 0) &&
            <Linha>
              <Rotulo>Sagrado:</Rotulo>
              <Valor>{ params?.dados?.sagrado }</Valor>
            </Linha>
          }
          { 
            (params?.dados?.critico || params?.dados?.critico === 0) && 
            <Linha>
              <Rotulo>Crítico:</Rotulo>
              <Valor>{ params?.dados?.critico }</Valor>
            </Linha>
          }
          { 
            (params?.dados?.feiticaria || params?.dados?.feiticaria === 0) && 
            <Linha>
              <Rotulo>Feitiçaria:</Rotulo>
              <Valor>{ params?.dados?.feiticaria }</Valor>
            </Linha>
          }
          { 
            (params?.dados?.encantamento || params?.dados?.encantamento === 0) && 
            <Linha>
              <Rotulo>Encantamento:</Rotulo>
              <Valor>{ params?.dados?.encantamento }</Valor>
            </Linha>
          }
          
        </Bloco>
      }
    </>
  )

}
