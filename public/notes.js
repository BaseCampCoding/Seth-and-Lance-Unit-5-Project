function safePlay(sound) {
  let playPromise = sound.play();

  if (playPromise !== undefined) {
    playPromise
      .then(_ => {
        // Automatic playback started!
        // Show playing UI.
        return
      })
      .catch(error => {
        // Auto-play was prevented
        // Show paused UI.
        return
      });
  }
}

for (const note of document.querySelectorAll(".note")) {
  const sound = new Audio(`/instruments/piano/${note.id}.ogg`);
  sound.volume = 0;
  safePlay(sound);
}

for (const note of document.querySelectorAll(".note")) {
  note.addEventListener("click", () => {
    const sound = new Audio(`/instruments/piano/${note.id}.ogg`);
    sound.volume = 0.1;
    safePlay(sound);
    setTimeout(() => {
      sound.pause();
    }, 2000);
  });
}

window.addEventListener("keydown", (Event) => {
  if (!Event.repeat && acceptedPianoKeys.includes(Event.code)) {
    if (Event.code && Event.shiftKey) {
      const sound = new Audio(
        `/instruments/piano/${pianoKeysTranslator[Event.code]}s.ogg`
      );
      sound.volume = 0.1;
      const key = document.getElementById(
        `${pianoKeysTranslator[Event.code]}s`
      );
      key.classList.add("note-black-pressed");
      return safePlay(sound);
    }

    const sound = new Audio(
      `/instruments/piano/${pianoKeysTranslator[Event.code]}.ogg`
    );
    const key = document.getElementById(`${pianoKeysTranslator[Event.code]}`);
    key.classList.add("note-white-pressed");
    sound.volume = 0.1;
    safePlay(sound);
    setTimeout(() => {
      sound.pause();
    }, 2000);
  }
});

window.addEventListener("keyup", (Event) => {
  if (acceptedPianoKeys.includes(Event.code)) {
    const naturalKey = document.getElementById(
      `${pianoKeysTranslator[Event.code]}`
    );
    naturalKey.classList.remove("note-white-pressed");
    const sharpKey = document.getElementById(
      `${pianoKeysTranslator[Event.code]}s`
    );
    sharpKey ? sharpKey.classList.remove("note-black-pressed") : "";
  }
});

// Ghost Play
document.getElementById("ghost-play-button").addEventListener("click", () => {
  function play(keyCode, isShifted) {
    if (isShifted) {
      const sound = new Audio(
        `/instruments/piano/${pianoKeysTranslator[keyCode]}s.ogg`
      );
      sound.volume = 0.1;
      const key = document.getElementById(`${pianoKeysTranslator[keyCode]}s`);
      key.classList.add("note-black-pressed");
      setTimeout(() => {
        sound.pause();
        key.classList.remove("note-black-pressed");
      }, 2000);
      return safePlay(sound);
    }

    const sound = new Audio(
      `/instruments/piano/${pianoKeysTranslator[keyCode]}.ogg`
      );
      const key = document.getElementById(`${pianoKeysTranslator[keyCode]}`);
    key?.classList.add("note-white-pressed");
    sound.volume = 0.1;
    safePlay(sound);
    setTimeout(() => {
      sound.pause();
      key?.classList.remove("note-white-pressed");
    }, 2000);
  }

  function updateTime(time) {
    const minutes = Math.floor(time / 60000)
    const seconds = Math.floor((time / 1000) % 60)
    timeString = `${minutes <= 9 ? "0" : ""}${minutes}:${seconds <= 9 ? "0" : ""}${seconds}`
    ghostPlayTimeContainer.innerText = timeString
  }
  
  if (document.getElementById("ghost-play-button").innerText === "Play") {
    document.getElementById("ghost-play-button").innerText = "Stop"
    let timings = [];
    let isGrouping = false;
    let group = [];
    let notes = [];
    let totalTime = 0;
    let timeDisplay = "";
    let currentTime = 0

    for (const char of document.getElementById("ghost-play-input").value) {
      // Syntax Characters
      switch (char) {
        case ",":
          timings.push(100);
          notes.push([""]);
          break;
        case ".":
          timings.push(250);
          notes.push([""]);
          break;
        case "/":
          timings.push(500);
          notes.push([""]);
          break;
        case "|":
          timings.push(1000);
          notes.push([""]);
          break;
        case "[":
          isGrouping = true;
          break;
        case "]":
          isGrouping = false;
          notes.push(group);
          timings.push(100);
          group = [];
          break;
      }
  
      // Note Characters
      if (acceptedGhostKeys.includes(char)) {
        if (isGrouping) {
          group.push(char);
        } else {
          notes.push([char]);
          timings.push(100);
        }
      }
    }

    if (timings.length > 0) {
      totalTime = timings.reduce((acc, curr) => acc + curr);
      currentTime = totalTime
      const autoStop = setTimeout(() => {
        document.getElementById("ghost-play-button").innerText = "Play";
        ghostPlayTimeContainer.innerText = "--:--"
      }, totalTime + 100)
      timeouts.push(autoStop)
      updateTime(currentTime)

      for (let i = 0; i < timings.length; i++) {
        const timeout = setTimeout(
          () => {
            for (const char of notes[i]) {
              const noteData = ghostPlayKeyTranslator[char];
              play(noteData?.keyCode, noteData?.isShifted);
            }
            currentTime -= timings[i]
            updateTime(currentTime)
          },
          timings.slice(0, i + 1).reduce((acc, curr) => acc + curr)
        );
        timeouts.push(timeout);
      }
    }
  } else {
    for (const timeout of timeouts) {
      clearTimeout(timeout);
    };
    document.getElementById("ghost-play-button").innerText = "Play";
    ghostPlayTimeContainer.innerText = "--:--"
  }
})

document.getElementById("song-list").addEventListener("input", (Event) => {
  document.getElementById("ghost-play-input").value = songs[Event.target.value] ?? "Cannot fetch song"
})