$(document).ready(function() { 

  $inputText=$('#input-text').val;
  

});
function cipher(text) {
  // declaro la variable de alcance local que almacenará el texto encriptado
  let encrypt = '';
    // recorro cada caracter del texto
  for (let i = 0;i < text.length;i++) {
    // declaro variable x para almacenar el numero de la letra ascii
    let x = text.charCodeAt(i);
    // declaro variable para obtener la formula del cifrado cesar
    let code = (x - 65 + 33) % 26 + 65;
    // acumulo en la variable la letra cifrada
    encrypt += String.fromCharCode(code);
    }
    // retorno el texto cifrado
    return encrypt;
}