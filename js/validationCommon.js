
function resetErrors(inputs, errorsTexts, errorInfo) {

    errorInfo.innerText = "";

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error-input");
    }
    for (let i = 0; i < errorsTexts.length; i++) {
        errorsTexts[i].innerText = "";
    }
    console.log(errorInfo)


}

function checkRequired(value) {
    if(!value) {
        return false;
    }

    value = value.toString().trim();

    if(value === "") {
        return false;
    }

    return true;
}

function checkTextLengthRange(value, min, max) {
    if(!value) {
        return false;
    }

    value = value.toString().trim();
    const length = value.length;
    if(max && length > max) {
        return false;
    }

    if(min && length < min) {
        return false;
    }

    return true;
}

function checkSelected(value) {
    if ((value == "-- Wybierz stopień --") || (value == "-- wybierz sprawę --")) {
        return false;
    }
    return true;
}

function checkDate(value) {

    if (!value) {
        return false;
    }

    const pattern = /(\d{4})-(\d{2})-(\d{2})/;

    return pattern.test(value)

}

function checkNumber(value) {
    if (!value) {
        return false;
    }
    if (isNaN(value)) {
        return false;
    }

    return true;
}