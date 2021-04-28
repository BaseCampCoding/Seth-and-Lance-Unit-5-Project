const mSound = new Audio("./metronome.mp3");
const metronomePWR = document.getElementById("metronomePWR");
const metronomeSpeed = document.getElementById("metronomeSpeed");

var url = "./metronome.mp3";
var context = new AudioContext();
var source = context.createBufferSource();
var wentThrough = false;
source.connect(context.destination);

metronomePWR.addEventListener("change", () => {
  if (metronomePWR.checked) {
    source.connect(context.destination);
    if (!wentThrough) {
      wentThrough = true;

      var request = new XMLHttpRequest();
      request.open("GET", url, true);
      request.responseType = "arraybuffer";
      request.onload = function () {
        context.decodeAudioData(request.response, function (response) {
          if (source.buffer === null) {
            source.buffer = response;
          }
          source.start();
          source.loop = true;
        });
      };
      request.send();
    }
  }
  if (!metronomePWR.checked) {
    source.disconnect(context.destination);
  }
});

metronomeSpeed.addEventListener("change", () => {
  const speed = Number(metronomeSpeed.value);
  source.playbackRate.value = speed;
});
