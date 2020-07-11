$(document).ready(function() {

  var holding = false;
  var track = document.getElementById('track');
  var progress = document.getElementById('progress');
  var play = document.getElementById('play');
  var next = document.getElementById('next');
  var prev = document.getElementById('prev');
  var title = document.getElementById('title');
  var artist = document.getElementById('artist');
  var art = document.getElementById('art');
  var current_track = 0;
  var song, audio, duration;
  var playing = false;
  var songs = [{
    title: 'Gymnopedie No 1',
    artist: 'Erik Satie',
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kevin_MacLeod/Classical_Sampler/Kevin_MacLeod_-_Erik_Satie_Gymnopedie_No_1.mp3',
    art: 'https://www.xlsemanal.com/wp-content/uploads/sites/3/2017/02/Escher-arte-xlsemanal-2.jpg'
  }, {
    title: "Sorcerer's Apprentice",
    artist: 'Paul Dukas',
    url: 'https://ia601900.us.archive.org/7/items/SorcerersApprentice/SorcerersApprentice.mp3',
    art: 'https://i.postimg.cc/XYYWF0KJ/DSCN9128.jpg'
  }, {
    title: 'Peer Gynt In The Hall Of The Mountain King',
    artist: 'Edvard Grieg',
    url: 'https://ia601605.us.archive.org/10/items/16EdvardGriegPeerGyntInTheHallOfTheMountainKing1875/16%20Edvard%20Grieg%20-%20Peer%20Gynt%20In%20The%20Hall%20Of%20The%20Mountain%20King%2C1875.mp3',
    art: 'https://i0.wp.com/www.hisour.com/wp-content/uploads/2019/11/In-the-Hall-of-the-Mountain-King-360%C2%B0-Video-Carnegie-Hall.jpg'
  }, {
    title: 'Полет шмеля (Flight of the Bumblebee)',
    artist: 'Nikolái Rimski-Kórsakov',
    url: 'https://ia800201.us.archive.org/13/items/FlightOfTheBumblebee_201310/Flight%20of%20the%20Bumblebee.mp3',
    art: 'https://i.postimg.cc/CLzTL4wB/File-ashx.png'
  }];

  window.addEventListener('load', init(), false);

  function init() {
    song = songs[current_track];
    audio = new Audio();
    audio.src = song.url;
    title.textContent = song.title;
    artist.textContent = song.artist;
    art.src = song.art;
  }


  audio.addEventListener('timeupdate', updateTrack, false);
  audio.addEventListener('loadedmetadata', function() {
    duration = this.duration;
  }, false);
  window.onmousemove = function(e) {
    e.preventDefault();
    if (holding) seekTrack(e);
  }
  window.onmouseup = function(e) {
    holding = false;
    console.log(holding);
  }
  track.onmousedown = function(e) {
    holding = true;
    seekTrack(e);
    console.log(holding);
  }
  play.onclick = function() {
    playing ? audio.pause() : audio.play();
  }
  audio.addEventListener("pause", function() {
    play.innerHTML = '<i class="fas fa-play icon"></i>';
    playing = false;
  }, false);

  audio.addEventListener("playing", function() {
    play.innerHTML = '<i class="fas fa-pause icon"></i>';
    playing = true;
  }, false);
  next.addEventListener("click", nextTrack, false);
  prev.addEventListener("click", prevTrack, false);


  function updateTrack() {
    curtime = audio.currentTime;
    percent = Math.round((curtime * 100) / duration);
    progress.style.width = percent + '%';
    handler.style.left = percent + '%';
  }

  function seekTrack(e) {
    event = e || window.event;
    var x = e.pageX - player.offsetLeft - track.offsetLeft;
    percent = Math.round((x * 100) / track.offsetWidth);
    if (percent > 100) percent = 100;
    if (percent < 0) percent = 0;
    progress.style.width = percent + '%';
    handler.style.left = percent + '%';
    audio.play();
    audio.currentTime = (percent * duration) / 100
  }

  function nextTrack() {
    current_track++;
    current_track = current_track % (songs.length);
    song = songs[current_track];
    audio.src = song.url;
    audio.onloadeddata = function() {
      updateInfo();
    }
  }

  function prevTrack() {
    current_track--;
    current_track = (current_track == -1 ? (songs.length - 1) : current_track);
    song = songs[current_track];
    audio.src = song.url;
    audio.onloadeddata = function() {
      updateInfo();
    }
  }

  function updateInfo() {
    title.textContent = song.title;
    artist.textContent = song.artist;
    art.src = song.art;
    art.onload = function() {
      audio.play();
    }
  }
  
});
