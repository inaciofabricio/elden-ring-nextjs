import styled from "styled-components";

export const Container = styled.div`
  padding: 25px;  

  @media (max-width: 500px) {
    padding: 10px;
  }
`;

export const H1 = styled.h1`
  font-size: 26px;
  font-weight: 600;
  line-height: 30px;
  border-bottom: 2px solid #CCCCCC;
  padding: 25px 0 0;
  margin-bottom: 10px;
`;

export const H2 = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  padding: 15px 0 0;
  margin-bottom: 10px;
  border-bottom: 2px solid #CCCCCC;

  @media (max-width: 500px) {
    padding: 10px 0;
  }
`;

export const H3 = styled.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 10px;
`;

export const H4 = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  border-bottom: 1px solid #CCCCCC;
`;

export const Classe = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 25px;
`;

export const Caminho = styled.div`
  padding: 15px;
`;

export const LinkCaminho = styled.span`
  cursor: pointer;
  font-weight: 600;
`;
