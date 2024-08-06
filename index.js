const form = document.querySelector("form");
const nameInput = document.getElementById("nameIn").value;
const ageInput = document.getElementById("ageIn").value;
const dialog = document.querySelector("dialog");
const parag = document.querySelectorAll("p");
const nameText = parag[0];
const ageText = parag[parag.length - 1];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const { name, age } = form.elements;
  dialog.show();
  nameText.innerText = name.value;
  ageText.innerText = age.value + " años";
});

function closeModal() {
  dialog.close();
  form.reset();
}
