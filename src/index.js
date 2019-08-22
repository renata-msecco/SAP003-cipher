function cliquecifra(){
    event.preventDefault();
    //colocar event para não dar refresh autommático na pagina, uma vez que trata-se de um botão
    let mensagem= document.getElementById("message").value;
    let deslocamento= parseInt (document.getElementById("offset").value);
    let encodeMensagem = window.cipher.encode(mensagem, deslocamento);

  document.getElementById("result").innerHTML = `${encodeMensagem}` ;
}

function cliquedecifra(){
event.preventDefault();
  //colocar event para não dar refresh na pagina, uma vez que tem um botão
  let mensagem= document.getElementById("message").value;
 let deslocamento= parseInt (document.getElementById("offset").value);
 let decodeMensagem = window.cipher.decode(mensagem, deslocamento);

document.getElementById("result").innerHTML = `${decodeMensagem}` ;
}


  