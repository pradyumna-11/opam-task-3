const formEl = document.getElementById("formEl");
const rollNumberInputEl = document.getElementById("rollNumberInput");
const studentNameInputEl = document.getElementById("studentNameInput");
const studentEmailInputEl = document.getElementById("emailInput");
const yearOptionsEl = document.getElementById("year");
const branchOptionsEl = document.getElementById("branch");
const errorEl = document.getElementById("errorMsg");

const submitForm = (event) => {
  event.preventDefault();
  if (
    rollNumberInputEl.value !== "" &&
    studentNameInputEl.value !== "" &&
    studentEmailInputEl.value !== "" &&
    yearOptionsEl.value !== "" &&
    branchOptionsEl.value !== ""
  ) {
    console.log("Form submitted successfully");
    rollNumberInputEl.value = "";
    studentNameInputEl.value = "";
    studentEmailInputEl.value = "";

    errorEl.textContent = "";
  } else {
    errorEl.textContent = "Please fill all the details";
  }
};

formEl.addEventListener("submit", submitForm);
