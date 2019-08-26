window.cipher = {
  encode: encode,
  decode: decode
};

function encode(deslocamento, mensagem) {
//alert(mensagem + offset)
//return(message + offset)
  let encodeMensagem ="";
  for (let i=0; i <mensagem.length; i++) {
    if (mensagem.charCodeAt(i)>=65 && mensagem.charCodeAt (i) <=90) {
      let formula =((mensagem.charCodeAt(i) - 65 + deslocamento)%26)+65;
      encodeMensagem += String.fromCharCode(formula);
    }
    else if (mensagem.charCodeAt(i)>=97 && mensagem.charCodeAt (i)<=122) {
      let formula =((mensagem.charCodeAt(i) - 97 + deslocamento)%26)+97;
      encodeMensagem += String.fromCharCode(formula);  
    }
    else {
      let formula = mensagem.charCodeAt(i);
      encodeMensagem += String.fromCharCode(formula);   
    }
  }
  return encodeMensagem;
}

function decode(deslocamento, mensagem) {
  //alert(mensagem + offset)
  //return(message + offset)
  let decodeMensagem = "";
  for (let i=0; i <mensagem.length; i++) {
    if (mensagem.charCodeAt(i)>=65 && mensagem.charCodeAt (i) <=90) {
      let formula =((mensagem.charCodeAt(i) - 90 - deslocamento)%26)+90;
      decodeMensagem += String.fromCharCode(formula);
    }
    else if (mensagem.charCodeAt(i)>=97 && mensagem.charCodeAt (i)<=122) {
      let formula =((mensagem.charCodeAt(i) - 122 - deslocamento)%26)+122;
      decodeMensagem += String.fromCharCode(formula);  
    } 
    else {
      let formula = mensagem.charCodeAt(i);
      decodeMensagem += String.fromCharCode(formula);   
    }
  }
  return decodeMensagem;
}
  
