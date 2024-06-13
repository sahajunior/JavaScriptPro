function compose(...functions) {
  return function (result) {
    return functions.reduceRight(function (prevResult, fn) {
      return fn(prevResult);
    }, result);
  };
}

// Your code goes here!
const inputText = document.getElementById('input-text');
const uppercaseCheckbox = document.getElementById('uppercase');
const colorPicker = document.getElementById('color-picker');
const fontSizeSelector = document.getElementById('font-size');
const fontFamilySelector = document.getElementById('font-family');
const styledText = document.getElementById('styled-text');

const applyUppercase = (str) =>
  uppercaseCheckbox.checked ? str.toUpperCase() : str;

const applyColor = (str) => {
  styledText.style.color = colorPicker.value;
  return str;
};

const applyFontSize = (str) => {
  styledText.style.fontSize = fontSizeSelector.value;
  return str;
};

const applyFontFamily = (str) => {
  styledText.style.fontFamily = fontFamilySelector.value;
  return str;
};

const updateStyledText = (str) => {
  styledText.textContent = str;
};

document.getElementById('apply-styles').addEventListener('click', () => {
  compose(
    updateStyledText,
    applyUppercase,
    applyColor,
    applyFontSize,
    applyFontFamily
  )(inputText.value);
});
