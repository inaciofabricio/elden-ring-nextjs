import Link from "next/link";

import { H2 } from "../UI/index"; //geral
import { Dados, Dado, Nome, Imagem } from "./UI/index"; //interno

export default function Itens(params) {
  
  return (
    <>        
      {
        params?.tipo &&
        <H2>{ params?.tipo }</H2>
      }
      <Dados>
          {
            params?.dados?.map((dado, y) => {
              return (
                <Dado key={y}>
                  <Link href={`/${dado?.categoria}/${dado?.id}`}>
                    <Imagem src={ dado?.imagens?.icone ? dado?.imagens?.icone : dado?.imagem } alt="" />
                  </Link>
                  <Nome>
                    { dado?.nome }
                  </Nome>
                </Dado>
              )
            })
          }
      </Dados>
    </>
  )
}
