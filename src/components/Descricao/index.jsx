
import Itens from "../Itens";
import { H2 } from "../UI/index";
import { Linha, Section } from "./UI/index";

export default function Descricao(params) { 

  return (
    <>
      {
        params?.descricoes &&
        <>
          <H2>{params.rotulo}</H2>
          {
            params?.descricoes?.textos && 
            params?.descricoes?.textos?.map((obj, x) => {
              return (
                <Linha key={x}>{ obj }</Linha>
              )
            })
          }
          {
            params?.descricoes?.itens &&
            <Section>
              <Itens tipo={ null } dados={params?.descricoes?.itens}/>
            </Section>
          }
        </>
      }
    </>
  )

}
