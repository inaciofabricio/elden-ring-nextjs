import Link from "next/link";
import { SubTitulo, Dados, Dado, Nome, Imagem } from "./UI/index";

export function Itens(params) {

  return (
    <>        
      <SubTitulo>{ params?.tipo }</SubTitulo>
      <Dados>
        {
          params?.dados?.map((dado, y) => {
            return (
              <Dado key={y}>
                <Link href={`/${dado?.categoria}/${dado?.id}`}>
                  <Imagem src={ dado?.imagem } alt="" />
                </Link>
                <Nome>
                  { dado?.quantidade ? `${dado?.quantidade}x ${dado?.nome}` : dado?.nome }
                </Nome>
              </Dado>
            )
          })
        }
      </Dados>
      
    </>
  )
}
