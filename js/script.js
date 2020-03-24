// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    let userInput = $("#search-term").val();
    fetch("https://api.giphy.com/v1/gifs/search?q=" + userInput +"&rating=pg&api_key=dc6zaTOxFJmzC")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
          console.log(data)
        //let image =  "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/giphy.gif?cid=e1bb72ffcb9b5b814bbae886138f477eb3cb8840d46adba9&rid=giphy.gif"           
        $(".gallery").append("<img src= 'https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/giphy.gif?cid=e1bb72ffcb9b5b814bbae886138f477eb3cb8840d46adba9&rid=giphy.gif'>")
        
    })

});



  


