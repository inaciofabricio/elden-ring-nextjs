
import { H3, Bloco, Linha, Rotulo, Valor } from "./UI/index";

export default function BonusDeAtributo(params) { 
  return (
    <>
      {
        params?.dados && 
        <Bloco>
          <H3>Bônus de Atributo:</H3>
          { 
            params?.dados?.for &&
            <Linha>
              <Rotulo>Força:</Rotulo>
              <Valor>{ params?.dados?.for }</Valor>
            </Linha>
          }
          { 
            params?.dados?.des &&
              <Linha>
                <Rotulo>Destreza:</Rotulo>
                <Valor>{ params?.dados?.des }</Valor>
              </Linha>
          }
          { 
            params?.dados?.int &&
            <Linha>
              <Rotulo>Inteligência:</Rotulo>
              <Valor>{ params?.dados?.int }</Valor>
            </Linha>
          }
          { 
            params?.dados?.fe &&
            <Linha>
              <Rotulo>Fé:</Rotulo>
              <Valor>{ params?.dados?.fe }</Valor>
            </Linha>
          }
          { 
            params?.dados?.arc &&
            <Linha>
              <Rotulo>Arcano:</Rotulo>
              <Valor>{ params?.dados?.arc }</Valor>
            </Linha>
          }          
        </Bloco>
      }
    </>
  )

}
