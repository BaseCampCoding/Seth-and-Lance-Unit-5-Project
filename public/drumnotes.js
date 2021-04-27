for (const drumnote of document.getElementsByClassName("drumnote")) {
  drumnote.addEventListener("click", () => {
    const sound = new Audio(`/instruments/acousticdrum/${drumnote.id}.wav`);
    sound.volume = 1;
    sound.play();
    setTimeout(() => {
      sound.pause();
    }, 2000);
  });
}

window.addEventListener("keydown", (Event) => {
  if (!Event.repeat) {
    const sound = new Audio(
      `/instruments/acousticdrum/${drumKeysTranslator[Event.code]}.wav`
    );
    const drumKey = document.getElementById(
      `${drumKeysTranslator[Event.code]}`
    );
    drumKey.classList.add("drumnote-pressed");
    sound.play();
    setTimeout(() => {
      sound.pause();
    }, 2000);
  }
});

window.addEventListener("keyup", (Event) => {
  const drumKey = document.getElementById(`${drumKeysTranslator[Event.code]}`);
  drumKey.classList.remove("drumnote-pressed");
});
