let music = [1, 1, 2, 2, 3, 3, 4, 4, 1, 5, 2, 5, 3, 6, 1, 7, 2, 7];
let speed = 2.0;
let note1_1, note1_2, note1_3, note1_4, note1_5;
let note2_1, note2_2, note2_3, note2_4, note2_5;
let note3_1, note3_2, note3_3, note3_4, note3_5;
let note4_1, note4_2, note4_3, note4_4, note4_5;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
for (let i = 1; i < 5; i++) {
  let note_element = document.getElementById("note" + i);
  for (let j = 1; j < 6; j++) {
    let clone = "note" + i + "_" + j + " = note_element.cloneNode(true);";
    eval(clone);
    clone = "note" + i + "_" + j + ".id = 'note" + i + j + "';";
    eval(clone);
    clone = "note_element.after(note" + i + "_" + j + ");";
    eval(clone);
  }
}
setSpeed(0);
function setSpeed(value) {
  speed += value;
  document.getElementById("disp").textContent = speed.toFixed(1);
}
function play() {
  document.getElementById("start").remove();
  document.getElementById("down").remove();
  document.getElementById("disp").remove();
  document.getElementById("up").remove();

  for (let i = 1; i < 5; i++)
    for (let j = 1; j < 6; j++) {
      let note_eval = "note" + i + "_" + j + ".style.visibility = 'visible';";
      eval(note_eval);
    }
  for (let i = 0; i < music.length / 10.0; i++) {
    for (let j = 0; i * 10 + j < music.length && j < 10; j += 2) {
      note_eval =
        "setTimeout(note," +
        music[i * 10 + j + 1] * 200 +
        "," +
        music[i * 10 + j] +
        (j / 2 + 1) +
        ");";
      console.log(note_eval + " " + i + " " + j);
      eval(note_eval);
    }
  }
}
async function note(number) {
  for (let top = 0; top <= 120; top += speed) {
    document.getElementById("note" + number).style.top = top + "vh";
    await sleep(10);
  }
}
