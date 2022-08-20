const gapBetweenBars = 2;
const sortingBoxWidth = 1000;
const sortingBoxBorderWidth = 5;

function load() {
  document.getElementById('app').style.width = sortingBoxWidth.toString() + 'px';
  document.getElementById('app').style.border = "5px solid black";

  // Generate array of n random numbers
  document.querySelector(".header__generate").addEventListener("click", () => {
    let n = document.getElementById("header__inputLength").value;
    if (n === "") {
      alert("Enter Length");
      return;
    }
    n = parseInt(n);
    let str = "";

    // Generate values: 1-100 inclusive, and append to string
    for (let i = 0; i < n; i++) {
      str += Math.floor(Math.random() * 100) + 1;
      if (i < n - 1) str += ", ";
    }
    document.getElementById("header__inputNumbers").value = str;
  });

  // Plot the the bars using the array values as heights
  document.querySelector(".header__plot").addEventListener("click", () => {
    let arr = document.getElementById("header__inputNumbers").value.split(",");
    let canvasWidth = sortingBoxWidth - 2 * sortingBoxBorderWidth + gapBetweenBars;
    let barWidth = canvasWidth / arr.length;
    let sortingBox = document.querySelector(".sortingBox");

    // Remove any existing children
    while (sortingBox.firstChild) {
      sortingBox.removeChild(sortingBox.firstChild);
    }

    for (let i = 0; i < arr.length; i++) {
      arr[i] = parseInt(arr[i]);
      let bar = document.createElement("div");
      bar.className = "bar";
      bar.style.left = barWidth * i + 'px';
      bar.style.height = arr[i] + '%';
      bar.style.borderLeftWidth = (barWidth - gapBetweenBars) + 'px';
      sortingBox.appendChild(bar);
    }
  });

  document.querySelector(".header__sort").addEventListener("click", () => {
    alert("I don't know how to sort yet!");
  });
}