window.cipher = {
  encode: encode,
  decode: decode,
}

function encode(mensagem, deslocamento) {
//alert(mensagem + offset)
//return(message + offset)
  let = encodeMensagem = ""
  for (let i=0; i <mensagem.length; i++){
  let formula = ((mensagem.charCodeAt(i) - 65 + deslocamento)%26)+65;
  encodeMensagem += String.fromCharCode(formula);
  }
  return encodeMensagem;

}

function decode(mensagem, deslocamento) {
  //alert(mensagem + offset)
  //return(message + offset)
   let = decodeMensagem = ""
    for (let i=0; i <mensagem.length; i++){
    let formula = ((mensagem.charCodeAt(i) - 90 -deslocamento)%26)+90;
    decodeMensagem += String.fromCharCode(formula);
    }
    return decodeMensagem
}
  
