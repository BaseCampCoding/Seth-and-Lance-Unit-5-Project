let pianoSoundPack = "piano"

if (instrumentSelector.value === "piano") {
  sheeshInput.addEventListener("click", () => {
    console.log(sheeshInput.checked)
    if (sheeshInput.checked) {
      pianoSoundPack = "sheeshano"
    } else {
      pianoSoundPack = "piano"
    }
    console.log(pianoSoundPack)
  })

  function preloadNotes() {
    for (const note of pianoNotes) {
      const sound = new Audio(`/instruments/${pianoSoundPack}/${note.id}.ogg`);
      sound.volume = 0;
      safePlay(sound);
    }
  }
  
  preloadNotes()
  
  for (const note of pianoNotes) {
    note.addEventListener("click", () => {
      const sound = new Audio(`/instruments/${pianoSoundPack}/${note.id}.ogg`);
      sound.volume = 0.2;
      safePlay(sound);
      setTimeout(() => {
        sound.pause();
      }, 2000);
    });
  }
  
  window.addEventListener("keydown", (Event) => {
    if (!Event.repeat && acceptedPianoKeys.includes(Event.code) && instrumentSelector.value === "piano") {
      if (Event.code && Event.shiftKey) {
        const sound = new Audio(
          `/instruments/${pianoSoundPack}/${pianoKeysTranslator[Event.code]}s.ogg`
        );
        sound.volume = 0.2;
        const key = document.getElementById(
          `${pianoKeysTranslator[Event.code]}s`
        );
        key?.classList.add("note-black-pressed");
        return safePlay(sound);
      }
  
      const sound = new Audio(
        `/instruments/${pianoSoundPack}/${pianoKeysTranslator[Event.code]}.ogg`
      );
      const key = document.getElementById(`${pianoKeysTranslator[Event.code]}`);
      key?.classList.add("note-white-pressed");
      sound.volume = 0.2;
      safePlay(sound);
      setTimeout(() => {
        sound.pause();
      }, 2000);
    }
  });
  
  window.addEventListener("keyup", (Event) => {
    if (acceptedPianoKeys.includes(Event.code) && instrumentSelector.value === "piano") {
      const naturalKey = document.getElementById(
        `${pianoKeysTranslator[Event.code]}`
      );
      naturalKey?.classList.remove("note-white-pressed");
      const sharpKey = document.getElementById(
        `${pianoKeysTranslator[Event.code]}s`
      );
      sharpKey ? sharpKey?.classList.remove("note-black-pressed") : "";
    }
  });
  
  // Ghost Play
  ghostPlayButton.addEventListener("click", () => {
    function play(keyCode, isShifted) {
      if (isShifted) {
        const sound = new Audio(
          `/instruments/${pianoSoundPack}/${pianoKeysTranslator[keyCode]}s.ogg`
        );
        sound.volume = 0.2;
        const key = document.getElementById(`${pianoKeysTranslator[keyCode]}s`);
        key?.classList.add("note-black-pressed");
        setTimeout(() => {
          sound.pause();
          key?.classList.remove("note-black-pressed");
        }, 2000);
        return safePlay(sound);
      }
  
      const sound = new Audio(
        `/instruments/${pianoSoundPack}/${pianoKeysTranslator[keyCode]}.ogg`
        );
        const key = document.getElementById(`${pianoKeysTranslator[keyCode]}`);
      key?.classList.add("note-white-pressed");
      sound.volume = 0.2;
      safePlay(sound);
      setTimeout(() => {
        sound.pause();
        key?.classList.remove("note-white-pressed");
      }, 2000);
    }
  
    function updateTime(time) {
      const minutes = Math.floor(time / 60000)
      const seconds = Math.floor((time / 1000) % 60)
      const timeString = `${minutes <= 9 ? "0" : ""}${minutes}:${seconds <= 9 ? "0" : ""}${seconds}`
      ghostPlayTimeContainer.innerText = timeString
    }
    
    if (ghostPlayButton.innerText === "Play") {
      ghostPlayButton.innerText = "Stop"
      let timings = [1000];
      let isGrouping = false;
      let group = "";
      let notes = [""];
      let totalTime = 0;
      let currentTime = 0
  
      preloadNotes()
  
      for (const char of ghostPlayInput.value) {
        // Syntax Characters
        switch (char) {
          case ",":
            timings.push(100);
            notes.push("");
            break;
          case ".":
            timings.push(250);
            notes.push("");
            break;
          case "/":
            timings.push(500);
            notes.push("");
            break;
          case "|":
            timings.push(1000);
            notes.push("");
            break;
          case "[":
            isGrouping = true;
            break;
          case "]":
            isGrouping = false;
            notes.push(group);
            timings.push(100);
            group = "";
            break;
        }
    
        // Note Characters
        if (acceptedGhostKeys.includes(char)) {
          if (isGrouping) {
            group += char;
          } else {
            notes.push(char);
            timings.push(100);
          }
        }
      }
  
      if (timings.length > 0) {
        totalTime = timings.reduce((acc, curr) => acc + curr);
        currentTime = totalTime
        const autoStop = setTimeout(() => {
          ghostPlayButton.innerText = "Play";
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
      ghostPlayButton.innerText = "Play";
      ghostPlayTimeContainer.innerText = "--:--"
    }
  })
  
  document.getElementById("song-list").addEventListener("input", (Event) => {
    ghostPlayInput.value = songs[Event.target.value] ?? "Cannot fetch song"
  })
}