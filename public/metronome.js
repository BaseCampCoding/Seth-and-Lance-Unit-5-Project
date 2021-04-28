const mSound = new Audio("./metronome.mp3");
const metronome = document.getElementById("metronome");

metronome.addEventListener("change", () => {
  mSound.pause();
  const speed = Number(metronome.value);
  if (speed === 0) {
    mSound.pause();
    return;
  }
  setInterval(() => {
    mSound.playbackRate = speed;
    mSound.play();
  });
});
