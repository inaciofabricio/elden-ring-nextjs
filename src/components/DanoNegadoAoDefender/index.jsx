
import { trataDecimal } from "../../util";

import { H3 } from "../UI/index";
import { Bloco, Linha, Rotulo, Valor } from "./UI/index";

export default function DanoNegadoAoDefender(params) { 

  return (
    <>
      {
        params?.dados && 
        <Bloco>
          <H3>Dano Negado ao Defender:</H3>
          {
            (params?.dados?.fisico || params?.dados?.fisico === 0) &&
            <Linha>
              <Rotulo>Físico:</Rotulo>
              <Valor>{ trataDecimal(params?.dados?.fisico) }</Valor>
            </Linha>
          }
          {
            (params?.dados?.magico || params?.dados?.magico === 0) &&
            <Linha>
              <Rotulo>Mágico:</Rotulo>
              <Valor>{ trataDecimal(params?.dados?.magico) }</Valor>
            </Linha>
          }
          {
            (params?.dados?.fogo || params?.dados?.fogo === 0) &&
            <Linha>
              <Rotulo>Fogo:</Rotulo>
              <Valor>{ trataDecimal(params?.dados?.fogo) }</Valor>
            </Linha>
          }
          {
            (params?.dados?.relampago || params?.dados?.relampago === 0) &&
            <Linha>
              <Rotulo>Relâmpago:</Rotulo>
              <Valor>{ trataDecimal(params?.dados?.relampago) }</Valor>
            </Linha>
          }
          {
            (params?.dados?.sagrado || params?.dados?.sagrado === 0) &&
            <Linha>
              <Rotulo>Sagrado:</Rotulo>
              <Valor>{ trataDecimal(params?.dados?.sagrado) }</Valor>
            </Linha>
          }
          {
            (params?.dados?.aumentoDeDefesa && params?.dados?.aumentoDeDefesa === 0) &&
            <Linha>
              <Rotulo>aumento de Defesa:</Rotulo>
              <Valor>{ trataDecimal(params?.dados?.aumentoDeDefesa) }</Valor>
            </Linha>
          }
          
        </Bloco>
      }
    </>
  )

}
