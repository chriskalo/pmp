var store;

document.querySelector('.start').addEventListener('click', function () {
if (document.getElementById('two').checked || document.getElementById('three').checked || document.getElementById('five').checked) {
  var audio = new Audio('sounds/intro.mp3');
  audio.play();

  setTimeout(function () {


    if (document.getElementById('two').checked) {

      store = 2;

      document.querySelector('.main').innerHTML = "";

      for (var i = 0; i < 2; i++) {
        document.querySelector('.main').innerHTML += '<img src="images/guitar.png" alt="guitar image" onclick="deleteimage()">';
      }

    } else if (document.getElementById('three').checked) {
      store = 3;

      document.querySelector('.main').innerHTML = "";

      for (var i = 0; i < 3; i++) {
        document.querySelector('.main').innerHTML += '<img src="images/guitar.png" alt="guitar image" onclick="deleteimage()">';
      }

    } else if (document.getElementById('five').checked) {

      store = 5;

      document.querySelector('.main').innerHTML = "";

      for (var i = 0; i < 5; i++) {
        document.querySelector('.main').innerHTML += '<img src="images/guitar.png" alt="guitar image" onclick="deleteimage()">';
        }

      }

      document.querySelector('.main').innerHTML += '<p class="instructions">Every time you complete one hour of studying, click one guitar</p>';
      setTimeout(function () {document.querySelector('.instructions').remove();}, 7000);


  }, 5000);
} else {
  alert("You must check how many hours you want to play");
}




});

function deleteimage() {

  document.querySelector('img').remove();
  if (document.querySelectorAll('img').length == 0) {
    var audio = new Audio('sounds/claps.mp3');
    audio.play();

    var audio2 = new Audio('sounds/outro.mp3');
    audio2.play();

    document.querySelector('.motivation').innerHTML = "<h1>Well done!!!</h1><h1> You played for " + store + " hours today!!!</h1>";
    document.querySelector('.motivation').innerHTML += '<img class="end" src="images/dance.gif" alt="dance gif">';
    document.querySelector('.main').remove();
  } else {
    // var random = Math.floor(Math.random() * 7) + 1;
    // var randomaudio = "part" + random + ".mp3";
    var finalaudio = new Audio('sounds/slap.mp3');
    finalaudio.play();
    if (document.querySelectorAll('img').length == 1) {
      document.querySelector('.main').innerHTML += '<p class="hour">' + document.querySelectorAll('img').length + ' hour left</p>';
      setTimeout(function () {document.querySelector('.hour').remove();}, 3000);
    } else {
      document.querySelector('.main').innerHTML += '<p class="hour">' + document.querySelectorAll('img').length + ' hours left</p>';
      setTimeout(function () {document.querySelector('.hour').remove();}, 3000);
    }


  }

}
