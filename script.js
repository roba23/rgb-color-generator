const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');

const colorBox = document.getElementById('colorBox');
const copyBtn = document.getElementById('copyButton');
const rgbValue = document.getElementById('inputType');


const redSpan = document.getElementById('redValue');
const greenSpan = document.getElementById('greenValue');
const blueSpan = document.getElementById('blueValue');

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);
copyBtn.addEventListener('click', copyRgbValue);

function updateColor(){
    red = redSlider.value;
    green = greenSlider.value;
    blue = blueSlider.value;

    redSpan.textContent = red;
    greenSpan.textContent = green;
    blueSpan.textContent = blue;
    const rgb =  `rgb(${red},${green},${blue})`;
    colorBox.style.backgroundColor = rgb;
    rgbValue.textContent = rgb;

    


}

function copyRgbValue(){
    red = redSlider.value;
    green = greenSlider.value;
    blue = blueSlider.value;

    const rgb =  `rgb(${red},${green},${blue})`;
    navigator.clipboard.writeText(rgb)
    .then(()=>
    {
        alert("Succesfly copied " + rgb);
    })
    .catch((error)=> {
        console.error("Failed to copy the rgb value");

    })

}
updateColor();