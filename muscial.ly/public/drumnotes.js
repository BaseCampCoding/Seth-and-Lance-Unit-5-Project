for (const drumnote of document.getElementsByClassName("drumnote")) {
  drumnote.addEventListener("click", () => {
    const sound = new Audio(`/instruments/acousticdrum/${drumnote.id}.wav`);
    sound.play();
    setTimeout(() => {
      sound.pause();
    }, 2000);
  });
}
