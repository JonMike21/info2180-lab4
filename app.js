//http://localhost/info2180-lab4/superheroes.php

window.onload = function() {
  //couldnt get the heroes to load on startup so i didn't put add safety to data being sent.

    var loadTextBtn = document.querySelector(".btn");
    var httpRequest, httpRequest1;

      httpRequest1 = new XMLHttpRequest();
      var name = document.querySelector('#name').value;

      var phplink = "superheroes.php?name="+name;
      httpRequest1.onreadystatechange = load;
      httpRequest1.open('POST', phplink);
      
      httpRequest1.send('name=' + encodeURIComponent(name));

      
    loadTextBtn.addEventListener('click', function(element) {
      element.preventDefault();
  
      httpRequest = new XMLHttpRequest();
      var name = document.querySelector('#name').value;

      var phplink = "superheroes.php?name="+name;
      httpRequest.onreadystatechange = load;
      httpRequest.open('POST', phplink);
      httpRequest.send('name=' + encodeURIComponent(name));
      
    });
  

    function load() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          var heros = httpRequest.responseText;
          var result = document.querySelector('#result');
          result.innerHTML = heros;
        } else {
          alert("Error with the request.");
        }
      }
    }
  };
  
