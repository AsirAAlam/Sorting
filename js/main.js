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
}