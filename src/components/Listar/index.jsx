import Link from "next/link";

import useApi from "../../hooks/useApi";
import Itens from "../Itens";

import { H1, Caminho, LinkCaminho } from "../UI/index"; //Geral

function Listar(params) { 
  
  const { data, error, isFetching } = useApi(params?.dados?.id);
  
  let lista = [];
  let verifica = false;

  if(!isFetching) {

    if(params?.dados?.porTipo) {

      data.forEach(obj => {
      
        verifica = false;
        
        lista.forEach(tipo => {
          if(obj.tipo.id === tipo.id){
            verifica = true;
          }
        });
  
        if(!verifica) {
          let tipo = obj.tipo;
          tipo.array = [];
          lista.push(tipo);
        }
      });
  
      data.forEach(obj => {
        lista.forEach(tipo => {
          if(obj.tipo.id == tipo.id) {
            tipo.array.push(obj);
          }
        });
      });

    } else {
      lista = data;
    }

  }

  return (
    <>
      <H1>{ params?.dados?.nome }</H1>
      <Caminho>
        <Link href={`/`}>
          <LinkCaminho> Home / </LinkCaminho>
        </Link>
        <span>{ params?.dados?.nome }</span>
      </Caminho>
      {
        !params?.dados?.porTipo &&
        <Itens tipo={ null } dados={lista}/> 
      }
      {
          params?.dados?.porTipo &&
          lista?.map((tipo, y) => { 
            return (
               <Itens key={y} tipo={tipo?.nome} dados={tipo?.array}/> 
            )
          })
      }
    </>
  );
  
}

export default Listar;
