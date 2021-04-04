self.addEventListener("message", (message) => {
  console.log(message.data);
});
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function note1() {
  for (let top = -150; top <= 200; top += 1.5) {
    document.getElementById("note1").style.top = top + "px";
    await sleep(1);
    console.log(top);
  }
}
note1();
