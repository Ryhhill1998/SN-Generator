
const generateBtn = document.querySelector(".generate");
const copyBtn = document.querySelector(".copy");
const serialNumberInput = document.querySelector(".serial-number");

const generateSerialNumber = () => {

    let serialNumber = "70";

    for (let i = 0; i < 7; i++) {
        const randomDigit = Math.floor(Math.random() * 10);
        serialNumber += `${randomDigit}`;
    }

    return +serialNumber;
}

const displaySerialNumber = () => serialNumberInput.value = generateSerialNumber();

const copyToClipboard = () => navigator.clipboard.writeText(serialNumberInput.value);

generateBtn.addEventListener("click", displaySerialNumber);
copyBtn.addEventListener("click", copyToClipboard);
