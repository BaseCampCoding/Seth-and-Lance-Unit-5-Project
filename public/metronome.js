const mSound = new Audio("./metronome.mp3");
const metronomePWR = document.getElementById("metronomePWR");
const metronomeSpeed = document.getElementById("metronomeSpeed");

metronomePWR.addEventListener("change", () => {
  if (metronomePWR.checked) {
    var loop = setInterval(() => {
      mSound.play();
      console.log("playing");
      if (!metronomePWR.checked) {
        mSound.pause();
        clearInterval(loop);
      }
    }, 1000);
  }
});

metronomeSpeed.addEventListener("change", () => {
  const speed = Number(metronomeSpeed.value);
  mSound.playbackRate = speed;
});
