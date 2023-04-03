const email = document.querySelector(".press");
const error = document.querySelector(".rederror");
const button = document.querySelector(".textbox");

button.addEventListener("click", function () {
  console.log(email.value);
  if (email.value.includes("@") && email.value.includes(".")) {
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
});
