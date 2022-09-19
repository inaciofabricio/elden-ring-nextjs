
import { H3 } from "../UI/index";
import { Bloco, Rotulo } from "./UI/index";

export default function EfeitosPassivos(params) { 
  return (
    <>
      {
        params?.dados && 
        <Bloco>
          <H3>Efeitos Passivos:</H3>
          {
            params?.dados?.map((efeito, x) => {
              return (
                <Rotulo key={x}>{ efeito }</Rotulo>
              )
            })
          }
          {
            params?.dados.length === 0 && <Rotulo>...</Rotulo>
          }
        </Bloco>
      }
    </>
  )

}
