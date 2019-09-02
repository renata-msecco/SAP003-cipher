document.getElementById("btn-encode").addEventListener("click", cliquecifra);

function cliquecifra()
{
  event.preventDefault();
  let mensagem= document.getElementById("message").value;
  let deslocamento= parseInt (document.getElementById("offset").value);
  let encodeMensagem = window.cipher.encode(deslocamento, mensagem);

  document.getElementById("result").innerHTML = `${encodeMensagem}` ;
}

document.getElementById("btn-decode").addEventListener("click", cliquedecifra);

function cliquedecifra()
{
  event.preventDefault();
  let mensagem= document.getElementById("message").value;
  let deslocamento= parseInt (document.getElementById("offset").value);
  let decodeMensagem = window.cipher.decode(deslocamento, mensagem);

  document.getElementById("result").innerHTML = `${decodeMensagem}` ;

}
cliquedecifra();
