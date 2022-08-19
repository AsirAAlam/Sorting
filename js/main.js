function load() {
  document.querySelector(".header__generate").addEventListener("click", () => {
    let n = document.getElementById("header__inputLength").value;
    if (n === "") {
      alert("Enter Length");
      return;
    }
    n = parseInt(n);
    let str = "";
    
    for (let i = 0; i < n; i++) {
      str += Math.floor(Math.random() * 100) + 1;
      if (i < n - 1) str += ", ";
    }
    document.getElementById("header__inputNumbers").value = str;
  });

  document.querySelector(".header__plot").addEventListener("click", () => {
    let arr = document.getElementById("header__inputNumbers").value.split(",");
    let width = 990.0;
    let dx = width / arr.length;
    let sortingBox = document.querySelector(".sortingBox");

    // remove any existing children
    while (sortingBox.firstChild) sortingBox.removeChild(sortingBox.firstChild);

    for (let i = 0; i < arr.length; i++)
    {
      arr[i] = parseInt(arr[i]);
      let bar = document.createElement("div");
      bar.className = "bar";
      bar.style.left = dx * i + 'px';
      bar.style.height = arr[i] + '%';
      bar.style.borderLeftWidth = (dx - 2) + 'px';
      sortingBox.appendChild(bar);
    }

    console.log(arr);
  });

  document.querySelector(".header__sort").addEventListener("click", () => {
    alert("I don't know how to sort yet!");
  });
}