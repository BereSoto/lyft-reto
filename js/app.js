$(document).ready(function() {
  // ---------Vista splash --------
  $('#startView').hide();
  setTimeout(function() {
    $('#brand').fadeOut(500);
    $('#startView').show();
  }, 2000);

  // Materialize
  $('select').material_select();

  // -------- View sing-up.html ----------
  var $inputPhone = $('#telephone');
  var $btnNext = $('#next');

  $inputPhone.keyup(function() {
    if ($(this).val().length === 10) {
      $btnNext.attr({
        disabled: false
      });
    } else {
      $btnNext.attr('disabled', 'disabled');
    }
  });

  $btnNext.click(function() {
    var number = Math.floor(Math.random() * 900) + 100;
    alert('LAB - ' + number);
    localStorage.labCode = number;
    localStorage.telephone = $inputPhone.val();
  });

  // -------- View validateCode.html ----------
  var $inputCode = $('.input-code');
  var $btnCheck = $('#checkCode');
  var $btnResend = $('#resendCode');

  $inputPhone.keypress(function(tecla) {
    if (tecla.charCode < 48 || tecla.charCode > 57)
      return false;
  });

  $inputCode.eq(0).focus();
  var counter = 0;
  $inputCode.keyup(function() {
    
    var code1 = $inputCode.eq(0).val(),
      code2 = $inputCode.eq(1).val(),
      code3 = $inputCode.eq(2).val();


    var code = code1 + code2 + code3;

    counter++;
    $inputCode.eq(counter).focus();


    if (code === localStorage.labCode) {
      $btnCheck.attr({
        disabled: false
      });
    } else {
      $btnCheck.attr('disabled', true);
    }
  });

  $('#telephone').html(localStorage.telephone);

  $btnResend.click(function() {
    $inputCode.val('');
    var number = Math.floor(Math.random() * 900) + 100;
    alert('LAB - ' + number);
    localStorage.labCode = number;
    $inputCode.eq(0).focus();
    counter = 0;
  });

  // -------- View form.html ----------
  var isValidName = false;
  var isValidEmail = false;
  var isChecked = false;

   $('#inputName').on('input', function() {
    if ($(this).val()) {
      isValidName = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $('#inputEmail').on('input', function(event) {
    isValidEmail = false;
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (REGEXEMAIL.test($(this).val())) {
      isValidEmail = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $('.checkbox').on('click', function(event) {
    if (event.target.checked) {
      isChecked = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  function activeButton() {
    if (isValidName && isValidEmail && isChecked) {
      $('#submit').attr({
        disabled: false
      });
    }
  }

  function desactiveButton() {
    $('#submit').attr('disabled', 'disabled');
  }
});
