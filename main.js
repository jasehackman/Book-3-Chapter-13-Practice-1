let theSpot = document.getElementById("message");
let spot1 = document.getElementById("a");
let spot2 = document.getElementById("b");


theSpot.addEventListener("keyup", (event) => {
  spot1.innerHTML = event.target.value
  spot2.innerHTML = event.target.value

})