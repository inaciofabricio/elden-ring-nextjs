import Link from "next/link";

import useApi from "../../hooks/useApi";
import { trataDecimal } from "../../util";

import { Caminho, LinkCaminho, H1, H2 } from "../UI/index";
import { SecImagem, Imagem, SecInfo, SecOutros, SecVideos } from "./UI/index";

import Habilidade from "../Habilidade";
import Descricao from "../Descricao";
import PoderDeAtaque from "../PoderDeAtaque";
import DanoNegadoAoDefender from "../DanoNegadoAoDefender";
import BonusDeAtributo from "../BonusDeAtributo";
import AtributosNecessarios from "../AtributosNecessarios";
import NegacaoDeDano from "../NegacaoDeDano";
import Resistencia from "../Resistencia";
import EfeitosPassivos from "../EfeitosPassivos";
import Linha from "../Linha";
import Video from "../Video";

function Item(params) { 
  
  const id = params?.dados?.id;

  const { data, error, isFetching } = useApi(params?.dados?.tipo?.id);

  let item = null;

  if(!isFetching) {
    item = data.find((obj) => {
      return obj.id === id;
    });
  }

  return (
    <>
      {
        item?.nome &&
        <H1>{ item?.nome }</H1>
      }
      <Caminho>
        <Link href={`/`}>
          <LinkCaminho> Home / </LinkCaminho>
        </Link>
        <Link href={`/${params?.dados?.tipo?.id}`}>
          <LinkCaminho> {`${params?.dados?.tipo?.nome} /`} </LinkCaminho>
        </Link>
        <span>{item?.nome}</span>
      </Caminho>
      {
        item?.imagens?.padrao &&
        <SecImagem>
          <Imagem src={item?.imagens?.padrao} alt="..." />
        </SecImagem>
      }
      <SecInfo>
        <H2>Informações:</H2>
        {
          item?.tipo?.nome &&
          <Linha rotulo="Tipo:" valor={item?.tipo?.nome} />
        }
        {
          item?.subTipo?.nome &&
          <Linha rotulo="Sub Tipo:" valor={item?.subTipo?.nome} />
        }
        {
          item?.peso &&
          <Linha rotulo="Peso:" valor={trataDecimal(item?.peso)} />
        }
        {
          item?.custoPf &&
          <Linha rotulo="Custo PF:" valor={item?.custoPf} />
        }
        {
          item?.custoPv &&
          <Linha rotulo="Custo PV:" valor={item?.custoPv} />
        }
        {
          item?.espacos &&
          <Linha rotulo="Espaços usados:" valor={item?.espacos} />
        }
        {
          item?.efeito &&
          <Linha rotulo="Efeito:" valor={item?.efeito} />
        }
        {
          item?.descricoes &&
          <Descricao rotulo="Descrição do Item:" descricoes={item?.descricoes} />
        }
        {
          item?.habilidade &&
          <Habilidade habilidade={item?.habilidade}/>
        }
      </SecInfo>
      {
        (item?.poderDeAtaque || item?.danoNegadoAoDefender || item?.bonusDeAtributo ||
          item?.atributosNecessarios || item?.negacaoDeDano || item?.resistencia ||
          item?.efeitosPassivos) &&
        <>
          <H2>Informações Complementares:</H2>
            <SecOutros>
            {
              item?.poderDeAtaque &&
              <PoderDeAtaque dados={item?.poderDeAtaque} />
            }
            {
              item?.danoNegadoAoDefender &&
              <DanoNegadoAoDefender dados={item?.danoNegadoAoDefender} />
            }
            {
              item?.bonusDeAtributo &&
              <BonusDeAtributo dados={item?.bonusDeAtributo} />
            }
            {
              item?.atributosNecessarios &&
              <AtributosNecessarios dados={item?.atributosNecessarios} />
            }
            {
              item?.negacaoDeDano &&
              <NegacaoDeDano dados={item?.negacaoDeDano} />
            }
            {
              item?.resistencia &&
              <Resistencia dados={item?.resistencia} />
            }
            {
              item?.efeitosPassivos &&
              <EfeitosPassivos dados={item?.efeitosPassivos} />
            }
          </SecOutros>
        </>
      }
      {
        item?.videos && 
        <SecVideos>
          <H2>Vídeos:</H2>
          <Video dados={item?.videos}/>
        </SecVideos>
      }
    </>
  );
}

export default Item;
