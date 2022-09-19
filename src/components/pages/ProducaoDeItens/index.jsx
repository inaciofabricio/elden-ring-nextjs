
import Link from "next/link";

import useApi from "../../../hooks/useApi";
import Itens from "../../Itens";
import { montaUrl } from "../../../util";

import { Caminho, LinkCaminho, H1, H2 } from "../../UI/index";
import { Dados } from "./UI/index";

export default function ProducaoDeItens() {

  const { data, error, isFetching } = useApi("producao-de-itens");

  let dados = [];

  if(!isFetching) {
    dados = data;
  }

  return (
    <>
      <H1>Produção de Itens</H1>
      <Caminho>
        <Link href={`/`}>
          <LinkCaminho> Home / </LinkCaminho>
        </Link>
        <span>Produção de Itens</span>
      </Caminho>
      {
        dados.map((dado, x) => {
          return  (
            <Dados>
              <div key={x}>
                <img src={ montaUrl(dado?.imagem) } alt="..." />
                <div>{ dado?.nome }</div>
              </div>
              <div>
                <Itens tipo={ null } dados={ dado?.itens }/>
              </div>
            </Dados>
          )
        })
      }

    </>
  )
}
