const SquareGen = (i = 0) => {
  if (i === 100) {
    return;
  }

  const square = document.createElement("div");

  square.id = `square-${i}`;

  square.style.height = "100%";
  square.style.width = "100%";

  document.body.appendChild(square);

  SquareGen(i + 1);
};

SquareGen();

setInterval(() => {
  const square = document.getElementById(
    `square-${Math.floor(Math.random() * 100)}`
  );

  square.style.backgroundColor = "limegreen";

  const anotherSquare = document.getElementById(
    `square-${Math.floor(Math.random() * 100)}`
  );

  anotherSquare.style.backgroundColor = "black";
}, 100);

const message = document.getElementById("message");

let count = 0;

setInterval(() => {
  if (count === 5) {
    message.innerText = message.innerText
      .split("")
      .splice(0, message.innerText.length - 5)
      .join("");

    count = 0;
  }
  message.innerText += ".";
  count++;
}, 500);
