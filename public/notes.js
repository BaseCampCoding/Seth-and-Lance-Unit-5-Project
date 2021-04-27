for (const note of document.querySelectorAll(".note")) {
  const sound = new Audio(`/instruments/piano/${note.id}.ogg`);
  sound.volume = 0;
  sound.play();
}

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
  if (!Event.repeat) {
    if (Event.code && Event.shiftKey) {
      const sound = new Audio(
        `/instruments/piano/${pianoKeysTranslator[Event.code]}s.ogg`
      );
      sound.volume = 0.1;
      const key = document.getElementById(`${pianoKeysTranslator[Event.code]}s`);
      key.classList.add("note-black-pressed");
      return sound.play();
    }
  
    const sound = new Audio(
      `/instruments/piano/${pianoKeysTranslator[Event.code]}.ogg`
    );
    const key = document.getElementById(`${pianoKeysTranslator[Event.code]}`);
    key.classList.add("note-white-pressed");
    sound.volume = 0.1;
    sound.play();
    setTimeout(() => {
      sound.pause();
    }, 2000);
  }
});

window.addEventListener("keyup", (Event) => {
  const naturalKey = document.getElementById(`${pianoKeysTranslator[Event.code]}`);
  naturalKey.classList.remove("note-white-pressed");
  const sharpKey = document.getElementById(`${pianoKeysTranslator[Event.code]}s`);
  sharpKey ? sharpKey.classList.remove("note-black-pressed") : "";
});
