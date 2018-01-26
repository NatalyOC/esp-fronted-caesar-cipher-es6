$(document).ready(function() { 
  var $text = $('#input-text');
  var $option = '';
  var validateText = false ;
  var validateOption = false ;

  $text.on('input', function(event) {
    if ($(this).val().length > 0) {
      validateText = true;
      activateButton();
    }
  });
  $('input[name=action]').change(function() {	 
    $option = $(this).val();
    validateOption = true;
    activateButton();
  });
  $('#button-clean').on('click', function() {
    $('#form-cipher').submit();
  });
  function activateButton() {
    if (validateOption && validateText) {
      $('#button-action').prop('disabled', false);
    }
  }
  $('#button-action').on('click', function() {
    let result = '';
    if ($option == 'cipher') {
      result = cipher($text.val().toUpperCase());
      var output = '<p>El Texto cifrado es : ' + result + '</p>';
    } else {
      result = decipher($text.val().toUpperCase());
      output = '<p>El Texto descifrado es : ' + result + '</p>';
    }
    $('#text-result').html(output);
  });
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
function decipher(text) {
  // declaro la variable que almacenará el texto desencriptado
  let decoded = '';
  // recorro cada caracter del texto
  for (let i = 0;i < text.length;i++) {
    // declaro variable x para almacenar el numero de la letra ascii
    let x = text.charCodeAt(i);
    // declaro variable para obtener la formula del cifrado cesar
    let code = (x + 65 - 33) % 26 + 65;
    // acumulo en la variable la letra descifrada
    decoded += String.fromCharCode(code);
  }
  // retorno el texto descifrado
  return decoded;
}