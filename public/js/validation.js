function validPasswordLength (password) {
  if (password.length >= 8) {
    return true 
  }
  else {
    return "Password must be at least 8 characters long"
  }
}
 
function validEmail(email) { 
  var re = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return re.test(email) ? true : "Must be a valid email address"
} 
 
function validCapital(password) {
  var recap = new RegExp(/[A-Z]/);
  return recap.test(password) ? true : "Password must have a capital letter";
}
 
function validNumber(password) {
  var renum = new RegExp(/\d/);
  return renum.test(password) ? true : "Password must have at least one numeric character (0-9)"; 
}
 
 
 
$(function(){
    $(".button").click(function(event){
      event.preventDefault();
 
      var email = document.forms["sign_up"].elements["user[email]"].value
      var password = document.forms["sign_up"].elements["user[password]"].value
      var validationsArray = [validEmail(email), 
                              validCapital(password), 
                              validNumber(password), 
                              validPasswordLength(password)]
 
      validationsArray = validationsArray.filter(function(element) {
        return element !== true;
      })
 
      if (validationsArray.length === 0) {
        $.post('/register', $('#submission').serialize(), function(){
          $('.registration').hide();
          location.href = '/';
        });
      }
      else {
        $.each(validationsArray, function(index, value) {
          $('#errors').append("<li>" + value + "</li>");
        })
      }
    });
  });