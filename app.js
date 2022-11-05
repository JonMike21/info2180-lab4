//http://localhost/info2180-lab4/superheroes.php

window.onload = function() {

    var loadTextBtn = document.querySelector(".btn");
    var httpRequest;
  
    loadTextBtn.addEventListener('click', function(element) {
      element.preventDefault();
  
      httpRequest = new XMLHttpRequest();
     
      var phplink = "superheroes.php";
      httpRequest.onreadystatechange = loadsuperlist;
      httpRequest.open('GET', phplink);
      httpRequest.send();
      
    });
  

    function loadsuperlist() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          var heros = httpRequest.responseText;
          alert(heros);
        } else {
          alert("Error with the request.");
        }
      }
    }
  };
  