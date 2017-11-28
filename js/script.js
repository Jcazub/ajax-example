var input = document.querySelector('#user-gif-search');
var searchBtn = document.querySelector('#submit-gif-search');
var gifContainer = document.querySelector('#gif-result-container');

function findGifs(searchTerm) {
  var searchUrl;
  fetch("https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=5")
    .then(function(response){
      return response.json();
    })
    .then(function(response){
      console.log(response.data);
      showGifs(response.data);
    });
} // Closes findGifs function


function showGifs(data){
  gifContainer.innerHTML="";
  for (var i = 0; i < data.length; i++) {
    var img = document.createElement('img');
    img.src = data[i].images.original.url;
    gifContainer.appendChild(img);
  }
}

if (input && searchBtn && gifContainer) {
  searchBtn.addEventListener('click', function() {
    var userInput = input.value;
    if (userInput !== "") {
      findGifs(userInput);
    }

  });

}
