import useApi from "../../../hooks/useApi";
import { Itens } from "./Itens";

import { Titulo, Classe, Imagem, Info, Hr } from "./UI/index";

export default function Classes() {
    
  const { data, error, isFetching } = useApi("classes");

  let classes = [];

  if(!isFetching) {
    classes = data;
  }

  return (
    <>
      <Titulo>Classes</Titulo>
        {
          classes?.map((classe, x) => {
              return (
                <div key={x}>
                  <Classe>
                    <Imagem src={ classe?.imagem } alt="..." />
                    <Info>
                      { classe?.armas.length > 0 && <Itens tipo="Armas Corpo a Corpo" dados={classe?.armas}/> }
                      { classe?.armaduras.length > 0 && <Itens tipo="Armaduras" dados={classe?.armaduras}/> }
                      { classe?.itens.length > 0 && <Itens tipo="Itens" dados={classe?.itens}/> }
                    </Info>
                  </Classe>
                  { 
                    (x + 1) < classes.length && <Hr />
                  }
                </div>
              )
          })
        }
        {
          classes.length === 0 &&
          <div >
              Sem resultados!
          </div>
        }
    </>  
  )
}

