const volumeOpen = document.querySelector("#volume__open");
const weightOpen = document.querySelector("#weight__open");
const lengthOpen = document.querySelector("#length__open");
const modals = document.querySelectorAll(".modal");
const volumeModal = document.querySelector("#volume");
const weightModal = document.querySelector("#weight");
const lengthModal = document.querySelector("#length");
const literToMl = document.querySelector("#L-ml");
const mlToL = document.querySelector("#ml-L");
const mlToMicrodrops = document.querySelector("#ml-microdrops");
const microdropsToMl = document.querySelector("#microdrops-ml");
const ounceToMl = document.querySelector("#ounce-ml");
const mlToOunce = document.querySelector("#ml-ounce");
const tbspToMl = document.querySelector("#tbsp-ml");
const mlToTbsp = document.querySelector("#ml-tbsp");
const tbspToTsp = document.querySelector("#tbsp-tsp");
const tspToTbsp = document.querySelector("#tsp-tbsp");
const tspToMl = document.querySelector("#tsp-ml");
const mlToTsp = document.querySelector("#ml-tsp");
const cupToOunce = document.querySelector("#cup-ounce");
const ounceToCup = document.querySelector("#ounce-cup");
const pintToOunce = document.querySelector("#pint-ounce");
const ounceToPint = document.querySelector("#ounce-pint");
const quartToOunce = document.querySelector("#quart-ounce");
const ounceToQuart = document.querySelector("#ounce-quart");
const quartToPints = document.querySelector("#quart-pints");
const pintsToQuart = document.querySelector("#pints-quart");
const gramToMg = document.querySelector("#gram-mg");
const mgToGram = document.querySelector("#mg-gram");
const mgToMCG = document.querySelector("#mg-mcg");
const mcgToMg = document.querySelector("#mcg-mg");
const kgToPound = document.querySelector("#kg-pound");
const poundToKg = document.querySelector("#pound-kg");
const poundToOunce = document.querySelector("#pound-ounce");
const ounceToPound = document.querySelector("#ounce-pound");
const inchToCm = document.querySelector("#inch-cm");
const cmToInch = document.querySelector("#cm-inch");
const footToInch = document.querySelector("#foot-inch");
const inchToFoot = document.querySelector("#inch-foot");
const volumeResult = document.querySelector("#volume-result");
const volumeInput = document.querySelector("#volumeInput");
const weightInput = document.querySelector("#weightInput");
const weightResult = document.querySelector("#weight-result");
const lengthResult = document.querySelector("#length-result");
const lengthInput = document.querySelector("#lengthInput");
const calculateVolume = document.querySelector("#calculate__volume");
const calculateWeight = document.querySelector("#calculate__weight");
const calculateLength = document.querySelector("#calculate__length");
const volumeClose = document.querySelector("#volume-close");
const weightClose = document.querySelector("#weight-close");
const lengthClose = document.querySelector("#length-close");
let result;

function openModal(modal) {
  modal.classList.add("modal__opened");
}

volumeOpen.addEventListener("click", () => openModal(volumeModal));

weightOpen.addEventListener("click", () => openModal(weightModal));

lengthOpen.addEventListener("click", () => openModal(lengthModal));

lengthClose.addEventListener("click", () => closeModal(lengthModal));
weightClose.addEventListener("click", () => closeModal(weightModal));
volumeClose.addEventListener("click", () => closeModal(volumeModal));

function convertVolume() {
  if (literToMl.checked) {
    result = Number(volumeInput.value);
    result = result * 1000;
    volumeResult.textContent = result.toFixed(1) + " ML";
  } else if (mlToL.checked) {
    result = Number(volumeInput.value);
    result = result / 1000;
    volumeResult.textContent = result.toFixed(1) + " L";
  } else if (mlToMicrodrops.checked) {
    result = Number(volumeInput.value);
    result = result * 60;
    volumeResult.textContent = result.toFixed(1) + " microdrops";
  } else if (microdropsToMl.checked) {
    result = Number(volumeInput.value);
    result = result / 60;
    volumeResult.textContent = result.toFixed(1) + " ML";
  } else if (ounceToMl.checked) {
    result = Number(volumeInput.value);
    result = result * 30;
    volumeResult.textContent = result.toFixed(1) + " ML";
  } else if (mlToOunce.checked) {
    result = Number(volumeInput.value);
    result = result / 30;
    volumeResult.textContent = result.toFixed(1) + " oz";
  } else if (tbspToMl.checked) {
    result = Number(volumeInput.value);
    result = result * 15;
    volumeResult.textContent = result.toFixed(1) + " ML";
  } else if (mlToTbsp.checked) {
    result = Number(volumeInput.value);
    result = result / 15;
    volumeResult.textContent = result.toFixed(1) + " tbsp";
  } else if (tbspToTsp.checked) {
    result = Number(volumeInput.value);
    result = result * 3;
    volumeResult.textContent = result.toFixed(1) + " tsp";
  } else if (tspToTbsp.checked) {
    result = Number(volumeInput.value);
    result = result / 3;
    volumeResult.textContent = result.toFixed(1) + " tbsp";
  } else if (tspToMl.checked) {
    result = Number(volumeInput.value);
    result = result * 5;
    volumeResult.textContent = result.toFixed(1) + " ML";
  } else if (mlToTsp.checked) {
    result = Number(volumeInput.value);
    result = result / 5;
    volumeResult.textContent = result.toFixed(1) + " tsp";
  } else if (cupToOunce.checked) {
    result = Number(volumeInput.value);
    result = result * 8;
    volumeResult.textContent = result.toFixed(1) + " oz";
  } else if (ounceToCup.checked) {
    result = Number(volumeInput.value);
    result = result / 8;
    volumeResult.textContent = result.toFixed(1) + " cup";
  } else if (pintToOunce.checked) {
    result = Number(volumeInput.value);
    result = result * 16;
    volumeResult.textContent = result.toFixed(1) + " oz";
  } else if (ounceToPint.checked) {
    result = Number(volumeInput.value);
    result = result / 16;
    volumeResult.textContent = result.toFixed(1) + " pint";
  } else if (quartToOunce.checked) {
    result = Number(volumeInput.value);
    result = result * 32;
    volumeResult.textContent = result.toFixed(1) + " oz";
  } else if (ounceToQuart.checked) {
    result = Number(volumeInput.value);
    result = result / 32;
    volumeResult.textContent = result.toFixed(1) + " quart";
  } else if (quartToPints.checked) {
    result = Number(volumeInput.value);
    result = result * 2;
    volumeResult.textContent = result.toFixed(1) + " pint";
  }
}

function convertWeight() {
  if (gramToMg.checked) {
    result = Number(weightInput.value);
    result = result * 1000;
    weightResult.textContent = result.toFixed(1) + " Mg";
  } else if (mgToGram.checked) {
    result = Number(weightInput.value);
    result = result / 1000;
    weightResult.textContent = result.toFixed(1) + " g";
  } else if (mgToMCG.checked) {
    result = Number(weightInput.value);
    result = result * 1000;
    weightResult.textContent = result.toFixed(1) + " mcg";
  } else if (mcgToMg.checked) {
    result = Number(weightInput.value);
    result = result / 1000;
    weightResult.textContent = result.toFixed(5) + " mg";
  } else if (kgToPound.checked) {
    result = Number(weightInput.value);
    result = result * 2.2;
    weightResult.textContent = result.toFixed(1) + " lb";
  } else if (poundToKg.checked) {
    result = Number(weightInput.value);
    result = result / 2.2;
    weightResult.textContent = result.toFixed(1) + " kg";
  } else if (poundToOunce.checked) {
    result = Number(weightInput.value);
    result = result * 16;
    weightResult.textContent = result.toFixed(1) + " ounce";
  } else if (ounceToPound.checked) {
    result = Number(weightInput.value);
    result = result / 16;
    weightResult.textContent = result.toFixed(1) + " lb";
  }
}

function convertLength() {
  if (inchToCm.checked) {
    result = Number(lengthInput.value);
    result = result * 2.5;
    lengthResult.textContent = result.toFixed(1) + " cm";
  } else if (cmToInch.checked) {
    result = Number(lengthInput.value);
    result = result / 2.5;
    lengthResult.textContent = result.toFixed(1) + " inch";
  } else if (footToInch.checked) {
    result = Number(lengthInput.value);
    result = result * 12;
    lengthResult.textContent = result.toFixed(1) + " inch";
  } else if (inchToFoot.checked) {
    result = Number(lengthInput.value);
    result = result / 12;
    lengthResult.textContent = result.toFixed(1) + " foot";
  }
}

function closeModal(modal) {
  modal.classList.remove("modal__opened");
}
