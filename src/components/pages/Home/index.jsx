import Link from "next/link";

import useApi from "../../../hooks/useApi";
import { Cards, Card, H4 } from "./UI/index";

export function Home() {

  const { data, error, isFetching } = useApi("home");

  let array = [];

  if(!isFetching){
    array = data;
  }

  return (
    <>      
      {
        array.map((linha, x) => {
          return (
            <Cards key={x}>
              {
                linha.map((coluna, y) => {
                  return (
                    <Card key={y}>
                      <Link href={ `/${coluna?.id}` }>
                        <img src={ coluna?.imagem } alt="..." />
                      </Link>
                      <H4>{ coluna?.rotulo }</H4>
                    </Card>
                  )
                })
              }
            </Cards>
          )
        })
      }  
            
    </>
  )
}
