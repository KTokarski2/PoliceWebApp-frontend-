function validateForm(event) {
    const nameInput = document.getElementById('name');
    const descriptionInput = document.getElementById('description');
    const startingDateInput = document.getElementById('startingDate');
    const endingDateInput = document.getElementById('endingDate');

    const errorName = document.getElementById('errorName');
    const errorDescriptionInput = document.getElementById('errorDescription');
    const errorStartingDate = document.getElementById('errorStartingDate');
    const errorEndingDate = document.getElementById('errorEndingDate');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([nameInput, descriptionInput, startingDateInput, endingDateInput],
        [errorName, errorDescriptionInput, errorStartingDate, errorEndingDate],
        errorsSummary);

    let valid = true;

    if (!checkRequired(nameInput.value)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(nameInput.value, 2, 50)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole powinno zawierać od 2 do 50 znaków";
    }
}