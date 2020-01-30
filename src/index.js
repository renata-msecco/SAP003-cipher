
const buttonCode = document.getElementById("btn-encode");
const buttonDecode = document.getElementById("btn-decode");
const message = document.getElementById("message");
const offSet = document.getElementById("offset");

buttonCode.addEventListener("click", () => {
  const encodeText = window.cipher.encode(+offSet.value, message.value);
  showMessage(encodeText)
});

buttonDecode.addEventListener("click", () => {
  const decodeText = window.cipher.decode(+offSet.value, message.value);
  showMessage(decodeText)
});

const showMessage = (message) => {
  document.getElementById("result").innerHTML = message;
}
