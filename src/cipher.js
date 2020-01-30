window.cipher = {
  encode: encode,
  decode: decode
};

function encode(move, message) {
  let encodeMessage = "";
  for (let i in message) {
    if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
      let formula = ((message.charCodeAt(i) - 65 + move) % 26) + 65;
      encodeMessage += String.fromCharCode(formula);
    }
    else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
      let formula = ((message.charCodeAt(i) - 97 + move) % 26) + 97;
      encodeMessage += String.fromCharCode(formula);
    }
    else {
      encodeMessage += message[i];
    }
  }
  return encodeMessage;
}

function decode(move, message) {
  let decodeMessage = "";
  for (let i in message) {
    if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
      let formula = ((message.charCodeAt(i) - 90 - move) % 26) + 90;
      decodeMessage += String.fromCharCode(formula);
    }
    else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
      let formula = ((message.charCodeAt(i) - 122 - move) % 26) + 122;
      decodeMessage += String.fromCharCode(formula);
    }
    else {
      let formula = message.charCodeAt(i);
      decodeMessage += String.fromCharCode(formula);
    }
  }
  return decodeMessage;
}