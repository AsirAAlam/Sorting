const gapBetweenBars = 2;
const sortingBoxWidth = 1000;
const sortingBoxBorderWidth = 5;
const barColor = '#036666';

function load() {
  const sortingBox = document.querySelector(".sortingBox");
  document.getElementById('app').style.width = sortingBoxWidth.toString() + 'px';
  document.getElementById('app').style.borderWidth = sortingBoxBorderWidth.toString() + 'px';

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
      bar.style.borderLeftColor = barColor;
      bar.addEventListener('mouseover', function handleMouseOver() {
        bar.style.borderLeftColor = '#469d89';
      });
      bar.addEventListener('mouseout', function handleMouseOver() {
        bar.style.borderLeftColor = barColor;
      });
      sortingBox.appendChild(bar);
    }
  });

  document.querySelector(".header__sort").addEventListener("click", async () => {
    // alert("I don't know how to sort yet!");
    const bars = sortingBox.children;
    const n = bars.length;
    let arr = document.getElementById("header__inputNumbers").value.split(",");
    let canvasWidth = sortingBoxWidth - 2 * sortingBoxBorderWidth + gapBetweenBars;
    let barWidth = canvasWidth / arr.length;

    const timer = ms => new Promise(res => setTimeout(res, ms));

    const heightStringToInt = (heightStr) => {
      return parseInt(heightStr.split('%')[0]);
    };

    // Selection Sort
    for (let i = 0; i < n; i++) {
      bars[i].style.borderLeftColor = 'white';
      await timer(100);
      let indexOfSmallest = i;
      
      // Find smallest in the rest of the array to swap with
      for (let j = i + 1; j < n; j++) {
        bars[j].style.borderLeftColor = '#fb6107';
        await timer(100);

        // Found new smallest
        if (heightStringToInt(bars[j].style.height) < heightStringToInt(bars[indexOfSmallest].style.height)) {
          // Reset color of previous smallest
          if (indexOfSmallest !== i) {
            bars[indexOfSmallest].style.borderLeftColor = barColor;
          }

          bars[j].style.borderLeftColor = '#1f2421';

          indexOfSmallest = j;
        } else { 
          bars[j].style.borderLeftColor = barColor;
        }
      }

      let newHeightForA = bars[indexOfSmallest].style.height;
      let newHeightForB = bars[i].style.height;

      bars[i].style.height = newHeightForA;
      bars[indexOfSmallest].style.height = newHeightForB;

      await timer(1000);

      bars[i].style.borderLeftColor = barColor;
      bars[indexOfSmallest].style.borderLeftColor = barColor;
    }
  });
}