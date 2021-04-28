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
      //open the request
      request.open("GET", url, true);
      //webaudio paramaters
      request.responseType = "arraybuffer";
      //Once the request has completed... do this
      request.onload = function () {
        context.decodeAudioData(request.response, function (response) {
          /* --- play the sound AFTER the buffer loaded --- */
          //set the buffer to the response we just received.
          if (source.buffer === null) {
            source.buffer = response;
          }
          //start(0) should play asap.
          source.start();
          source.loop = true;
        });
      };
      //Now that the request has been defined, actually make the request. (send it)
      request.send();
    }
  }
  if (!metronomePWR.checked) {
    console.log("help");
    source.disconnect(context.destination);
  }
});

metronomeSpeed.addEventListener("change", () => {
  const speed = Number(metronomeSpeed.value);
  source.playbackRate.value = speed;
});
