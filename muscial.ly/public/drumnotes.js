const drumnotes = document.getElementsByClassName("drumnote");
console.log(drumnotes);

for (const drumnote of drumnotes) {
  drumnote.addEventListener("click", () => {
    const sound = new Audio(`/instruments/acousticdrum/${drumnote.id}.wav`);
    sound.play();
    setTimeout(() => {
      sound.pause();
    }, 2000);
  });
}
