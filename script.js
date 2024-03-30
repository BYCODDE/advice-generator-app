const button = document.getElementById("main-svg");
const mainId = document.getElementById("main_id");
const mainP = document.getElementById("main_p");
console.log(button, mainId, mainP);

button.addEventListener("click", function () {
  async function myApi() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      mainId.innerText = data.slip.id;
      mainP.innerText = data.slip.advice;
      console.log(data.slip);
    } catch (error) {
      console.log(error);
    }
  }
  myApi();
});
