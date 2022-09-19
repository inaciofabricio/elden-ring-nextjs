import styled from "styled-components";

export const SecImagem = styled.section`
  text-align: center;
  padding: 10px 25px;

  @media (max-width: 500px) {
    padding: 10px;
  }
`;

export const Imagem = styled.img`
  @media (max-width: 500px) {
    width: 100%;
    height: auto;
  }
`;

export const SecInfo = styled.section`
  padding: 10px 0;

  @media (max-width: 500px) {
    padding: 5px 0;
  }
`;

export const SecOutros = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 0;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    padding: 10px 0;
  }
`;

export const SecVideos = styled.section`
  padding: 25px 0;

  @media (max-width: 500px) {
    padding: 10px 0;
  }
`;
