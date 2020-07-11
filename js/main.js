$(document).ready(function() {
  $('#logo').hover(function() {
    $('#l-img').addClass('rotate');
    $('#i-1').removeClass('rotate');
    $('#i-1').css('transition-delay', '0.3s');
  }, function() {
    $('#i-1').addClass('rotate');
    $('#l-img').removeClass('rotate');
    $('#l-img').css('transition-delay', '0.5s');
  });

  $('#logo-img').click(function() {
    $('#logo-img').hide();
    $('#player').show();
    $('#console').show();
    $('#i-2').removeClass('pause');
  });

  $('#player').mousedown(function() {
    $('#i-2').addClass('pause');
  });

  $('#player').mouseup(function() {
    $('#logo-img').show();
    $('#player').hide();
    $('#console').hide();
  });

  function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  var rotate = getRandomNumber(-20, 20);

  $('#photo-1').css("transform", "rotate(" + rotate + "deg)");

  var rotate = getRandomNumber(-20, 20);

  $('#photo-2').css("transform", "rotate(" + rotate + "deg)");

  var rotate = getRandomNumber(-20, 20);

  $('#photo-3').css("transform", "rotate(" + rotate + "deg)");

  var rotate = getRandomNumber(-20, 20);

  $('#photo-4').css("transform", "rotate(" + rotate + "deg)");

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  var tags = $(".tag").toArray().length;

  for (t = 0; t <= tags; t++) {
    $(tags[t]).css("background-color", getRandomColor());
  }

  $("#track").css("background-color", getRandomColor());
  $("#photoset-gallery").css("background-color", getRandomColor());
  $("#link-thumbnail").css("background-color", getRandomColor());

  var details_1 = getRandomNumber(1, 2);
  var details_2 = getRandomNumber(0, 11);

  var details = details_1 * details_2;

  if (details > 0 || details <= 10) {
    $("#details-1").hide();
    $("#details-3").hide();
    $("#details-2").show();
  }
  if (details >= 11) {
    $("#details-3").hide();
    $("#details-2").hide();
    $("#details-1").show();
  }
  if (details == 0) {
    $("#details-1").hide();
    $("#details-2").hide();
    $("#details-3").show();
  }

  $(window).scroll(function() {

    if (($(this).scrollTop() > 480) && ($(window).width() > 1080) && ($(document).height() >= 1920)) {
      $('#leftbar').addClass("fixed");
    } else {
      $('#leftbar').removeClass("fixed");
    }

    if (($(this).scrollTop() > 130) && ($(window).width() > 1080)) {
      $("#navbar-1").addClass("hidden");
      $("#navbar-2").removeClass("hidden");
    } else {
      $("#navbar-2").addClass("hidden");
      $("#navbar-1").removeClass("hidden");
    }

  });

  $("#arrow-right-1").click(function() {
    $("#carousel-1").hide();
    $("#carousel-2").show();
  });

  $("#arrow-left-2").click(function() {
    $("#carousel-2").hide();
    $("#carousel-1").show();
  });

  $("#arrow-right-2").click(function() {
    $("#carousel-2").hide();
    $("#carousel-3").show();
  });

  $("#arrow-left-3").click(function() {
    $("#carousel-3").hide();
    $("#carousel-2").show();
  });

  $("#arrow-right-3").click(function() {
    $("#carousel-3").hide();
    $("#carousel-4").show();
  });

  $("#arrow-left-4").click(function() {
    $("#carousel-4").hide();
    $("#carousel-3").show();
  });

  $("#arrow-right-4").click(function() {
    $("#carousel-4").hide();
    $("#carousel-1").show();
  });

  $("#arrow-left-1").click(function() {
    $("#carousel-1").hide();
    $("#carousel-4").show();
  });

  $('#show').click(function() {
    $('#text-ul').slideDown();
    $('#show').css('display', 'none');
    $('#hide').removeClass('hidden');
  });

  $('#hide').click(function() {
    $('#text-ul').slideUp();
    $('#show').css('display', 'block');
    $('#hide').addClass('hidden');
  });
]);
