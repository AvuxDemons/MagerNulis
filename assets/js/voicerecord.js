var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
let saveHandle

var Textbox = $("#content");
var instructions = $("#instructions");

var Content = "";

recognition.continuous = true;
recognition.lang = 'id-ID';

recognition.onresult = function (event) {
  var current = event.resultIndex;

  var transcript = event.results[current][0].transcript;

  Content += transcript;
  Textbox.val(Content);
};

$("#start").on("click", function (e) {
  if ($(this).text() == "Stop Record") {
    $(this).html("Voice Record");
    recognition.stop();
  } else {
    $(this).html("Stop Record");
    if (Content.length) {
      Content += " ";
    }
    recognition.start();
  }
});

// $("#hapus").click(function () {
//   Textbox.val("");
//   $("#load").html("Load File")
//   Content = ""
//   $("#start").html("Record")
// });

Textbox.on("input", function () {
  Content = $(this).val();
});