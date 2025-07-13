let write = document.querySelector(".playGround");
let box = document.querySelectorAll(".box");
let greeting = document.querySelector(".greetings2");
let results = document.querySelector(".result");
let reset = document.querySelector(".playAgain");
let playerA = true;
let playerB = false;

// console.log(box);

let winningSystem = () => {
  let combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let win = false;
  for (let index of combos) {
    let [a, b, c] = index; // a = index[0], b=index[1], c=index[2]
    if (
      box[a].innerText !== "" &&
      box[a].innerText === box[b].innerText &&
      box[b].innerText === box[c].innerText
    ) {
      win = true;
      setTimeout(() => {
        results.classList.add("finalResult");
        document.querySelector(".main").classList.add("blur");
      }, 250);

      if (box[a].innerText === "X" && win === true) {
        greeting.innerText = "Congratulations \n 🎉 Player X Wins 🎉";
      } else if (box[a].innerText === "O" && win === true) {
        greeting.innerText = "Congratulations \n🎉 Player O  Wins 🎉";
      }
    }
  }
  if (!win && [...box].every((b) => b.innerText !== "")) {
    setTimeout(() => {
      results.classList.add("finalResult");
    }, 250);
    greeting.innerText = "Match Draw 😐";
  }
};
//Working=> Go to Event Object check which element is clicked get its class List Check it contain Box or not If contain go to that Event Object go to that box that was clicked and add inner text
write.addEventListener("click", (e) => {
  if (playerA === true) {
    if (e.target.classList.contains("box")) {
      e.target.innerText = "X";
      playerA = false;
      playerB = true;
      winningSystem();
    }
  } else if (playerB === true) {
    if (e.target.classList.contains("box")) {
      e.target.innerText = "O";
      playerA = true;
      playerB = false;
      winningSystem();
    }
  }
});
reset.addEventListener("click", () => {
  box.forEach((b) => {
    b.innerText = "";
  });
  playerA = true;
  results.classList.remove("finalResult");
  document.querySelector(".main").classList.remove("blur");
});
