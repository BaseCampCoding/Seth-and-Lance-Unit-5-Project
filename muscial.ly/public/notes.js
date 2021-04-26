const notes = document.querySelectorAll(".note");

for (const note of notes) {
    note.addEventListener("click", () => {
        const sound = new Audio(`/instruments/piano/${note.id}.ogg`)
        sound.play()
    })
}