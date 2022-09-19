

import { trataDecimal } from "../../util";

import { H3, Bloco, Linha, Rotulo, Valor } from "./UI/index";

export default function NegacaoDeDano(params) { 

  return (
    <>
      {
        params?.dados && 
        <Bloco>
          <H3>Negação de dano:</H3>
          {
            (params?.dados?.fisico || params?.dados?.fisico === 0) &&
            <Linha>
              <Rotulo>Físico:</Rotulo>
              <Valor>{ trataDecimal(params?.dados?.fisico) }</Valor>
            </Linha>
          }
          {
            (params?.dados?.vsEsmagadores || params?.dados?.vsEsmagadores === 0) &&
            <Linha>
              <Rotulo>vs Esmagadores:</Rotulo>
              <Valor>{ trataDecimal(params?.dados?.vsEsmagadores) }</Valor>
            </Linha>
          }
          {
            (params?.dados?.vsCortantes || params?.dados?.vsCortantes === 0) &&
            <Linha>
              <Rotulo>vs Cortantes:</Rotulo>
              <Valor>{ trataDecimal(params?.dados?.vsCortantes) }</Valor>
            </Linha>
          }
          {
            (params?.dados?.vsPerfurantes || params?.dados?.vsPerfurantes === 0) &&
            <Linha>
              <Rotulo>vs Perfurantes:</Rotulo>
              <Valor>{ trataDecimal(params?.dados?.vsPerfurantes) }</Valor>
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
            (params?.dados?.igneo || params?.dados?.igneo === 0) && 
            <Linha>
              <Rotulo>Ígneo:</Rotulo>
              <Valor>{ trataDecimal(params?.dados?.igneo) }</Valor>
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
        </Bloco>
      }
    </>
  )

}
