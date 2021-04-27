for (const note of document.querySelectorAll(".note")) {
  note.addEventListener("click", () => {
    const sound = new Audio(`/instruments/piano/${note.id}.ogg`);
    sound.volume = 0.1;
    sound.play();
    setTimeout(() => {
      sound.pause();
    }, 2000);
  });
}

window.addEventListener("keydown", (Event) => {
  if (Event.code && Event.shiftKey) {
    const sound = new Audio(
      `/instruments/piano/${keysTranslator[Event.code]}s.ogg`
    );
    sound.volume = 0.1;
    const key = document.getElementById(`${keysTranslator[Event.code]}s`);
    key.classList.add("note-black-pressed");
    return sound.play();
  }

  const sound = new Audio(
    `/instruments/piano/${keysTranslator[Event.code]}.ogg`
  );
  const key = document.getElementById(`${keysTranslator[Event.code]}`);
  key.classList.add("note-white-pressed");
  sound.volume = 0.1;
  sound.play();
  setTimeout(() => {
    sound.pause();
  }, 2000);
});

window.addEventListener("keyup", (Event) => {
  const naturalKey = document.getElementById(`${keysTranslator[Event.code]}`);
  naturalKey.classList.remove("note-white-pressed");
  const sharpKey = document.getElementById(`${keysTranslator[Event.code]}s`);
  sharpKey ? sharpKey.classList.remove("note-black-pressed") : "";
});
