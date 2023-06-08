export const preventDecimalsOrNegativesInNumberFieldOnKeydown = (event) => {
    const invalidChars = ["-", "+", "e", "E", "."];

    if (invalidChars.includes(event.key)) {
        event.preventDefault();
    }
};

export const preventDecimalsOrNegativesOnPaste = (value) => value.replace(/[^0-9]/g, "");