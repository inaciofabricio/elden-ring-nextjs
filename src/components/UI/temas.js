import { textoClaro, textoEscuro, fundoClaro, fundoEscuro, fontFamily } from "./variaveis";

export const temaClaro = {
    body: fundoClaro,
    text: textoEscuro,
    white: true,
    fontFamily: fontFamily
}

export const temaEscuro = {
    body: fundoEscuro,
    text: textoClaro,
    white: false,
    fontFamily: fontFamily
}
