import styled from "styled-components";

export const LinhaVideo = styled.div`
  padding: 25px 0;
  width: 100%;
  height: 600px;

  @media (max-width: 500px) {
    padding: 25px 0;
    height: 400px;
  }
`;

export const LinhaLink = styled.div`
  padding: 25px 0;

  @media (max-width: 500px) {
    padding: 25px 0;
  }
`;

export const Iframe = styled.iframe`
  overflow: hidden;
  border: 0;
  align-seft: center;
  position: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100% !important;
`;

export const Bloco = styled.div`
  padding: 15px 10px;
`;

export const Rotulo = styled.span`
  margin-right: 5px;
`;

export const Link = styled.a`
  cursor:pointer;
  font-weight: 600;
`;
