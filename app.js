$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var email = $('#email').val();
    var password = $('#password').val();

      //verifier la valeur de l'input firstname
      //si c'est vide, j'affiche message d'erreur
    if (firstName === "") {
          $('.first-name-error').html('Please enter your first name');
    };

    if (lastName === "") {
          $('.last-name-error').html('Please enter your last name');
    };
    if (email === "") {
          $('.email-error').html('Please enter your email address');
    };
    if (password === "") {
          $('.password-error').html('Please enter your password ');
    };
    if (password.length < 8) {
          $('.password-error').html('Your password should contain 8 characters minimum');
    };
  });
});
