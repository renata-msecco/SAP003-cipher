document.getElementById("btn-encode").addEventListener("click", cliquecifra);

function cliquecifra()
{
  event.preventDefault();
  //colocar event para não dar refresh autommático na pagina, uma vez que trata-se de um botão
  let mensagem= document.getElementById("message").value;
  let deslocamento= parseInt (document.getElementById("offset").value);
  let encodeMensagem = window.cipher.encode(deslocamento, mensagem);

  document.getElementById("result").innerHTML = `${encodeMensagem}` ;
}

document.getElementById("btn-decode").addEventListener("click", cliquedecifra);

function cliquedecifra()
{
  event.preventDefault();
  //colocar event para não dar refresh na pagina, uma vez que tem um botão
  let mensagem= document.getElementById("message").value;
  let deslocamento= parseInt (document.getElementById("offset").value);
  let decodeMensagem = window.cipher.decode(deslocamento, mensagem);

  document.getElementById("result").innerHTML = `${decodeMensagem}` ;

}
cliquedecifra();
