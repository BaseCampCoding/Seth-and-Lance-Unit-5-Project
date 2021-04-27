const notes = document.querySelectorAll(".note");
const keysTranslator = {
  Digit1: "c2",
  Digit2: "d2",
  Digit3: "e2",
  Digit4: "f2",
  Digit5: "g2",
  Digit6: "a2",
  Digit7: "b2",
  Digit8: "c3",
  Digit9: "d3",
  Digit0: "e3",
  KeyQ: "f3",
  KeyW: "g3",
  KeyE: "a3",
  KeyR: "b3",
  KeyT: "c4",
  KeyY: "d4",
  KeyU: "e4",
  KeyI: "f4",
  KeyO: "g4",
  KeyP: "a4",
  KeyA: "b4",
  KeyS: "c5",
  KeyD: "d5",
  KeyF: "e5",
  KeyG: "f5",
  KeyH: "g5",
  KeyJ: "a5",
  KeyK: "b5",
  KeyL: "c6",
  KeyZ: "d6",
  KeyX: "e6",
  KeyC: "f6",
  KeyV: "g6",
  KeyB: "a6",
  KeyN: "b6",
  KeyM: "c7",
};

for (const note of notes) {
  note.addEventListener("click", () => {
    const sound = new Audio(`/instruments/piano/${note.id}.ogg`);
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
    const key = document.getElementById(`${keysTranslator[Event.code]}s`);
    key.classList.add("note-black-pressed");
    return sound.play();
  }

  const sound = new Audio(
    `/instruments/piano/${keysTranslator[Event.code]}.ogg`
  );
  const key = document.getElementById(`${keysTranslator[Event.code]}`);
  key.classList.add("note-white-pressed");
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
