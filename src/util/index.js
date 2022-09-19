export function trataDecimal(valor) {
  return typeof valor === "number" ? String(valor.toFixed(1).replace(".", ",")) : valor;
}

export function montaUrl(url) {  
    const baseUrlImagens = "https://raw.githubusercontent.com/inaciofabricio/anotacoes/main/elder-ring/image/";
    return baseUrlImagens + url;
}
