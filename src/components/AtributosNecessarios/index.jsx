
import { H3, Bloco, Linha, Rotulo, Valor } from "./UI/index";

export default function AtributosNecessarios(params) { 
  return (
    <>
      {
        params?.dados && 
        <Bloco>
          <H3>Atributos Necessários</H3>
          {
            (params?.dados?.for || params?.dados?.for === 0) &&
            <Linha>
              <Rotulo>Força:</Rotulo>
              <Valor>{ params?.dados?.for }</Valor>
            </Linha>
          }
          { 
            (params?.dados?.des || params?.dados?.des === 0) &&
            <Linha>
              <Rotulo>Destreza:</Rotulo>
              <Valor>{ params?.dados?.des }</Valor>
            </Linha>
          }
          { 
            (params?.dados?.int || params?.dados?.int === 0) &&
            <Linha>
              <Rotulo>Inteligência:</Rotulo>
              <Valor>{ params?.dados?.int }</Valor>
            </Linha>
          }
          { 
            (params?.dados?.fe || params?.dados?.fe === 0) && 
            <Linha>
              <Rotulo>Fé:</Rotulo>
              <Valor>{ params?.dados?.fe }</Valor>
            </Linha>
          }
          { 
            (params?.dados?.arc || params?.dados?.arc === 0) &&
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
