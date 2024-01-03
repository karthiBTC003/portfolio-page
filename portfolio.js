// from script

function sendwhatsapp(){
    var phonenumber = "+919361191640";

    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var position = document.querySelector(".hr").value;
    var message = document.querySelector(".message").value;

    var url = "https://wa.me/" + phonenumber + "?text="
    +"Name : "+name+"%0a"
    +"Email : "+email+"%0a"
    +"positin: "+position+"%0a"
    +"Message : "+message
    +"%0a%0a"
    +"This is an example of send HTML form data to WhatsApp";

    window.open(url, '_blank').focus();
  }