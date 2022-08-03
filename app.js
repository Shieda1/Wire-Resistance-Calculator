// https://calculator.swiftutors.com/wire-resistance-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const resistanceRadio = document.getElementById('resistanceRadio');
const resistivityRadio = document.getElementById('resistivityRadio');
const lengthoftheconductorRadio = document.getElementById('lengthoftheconductorRadio');
const areaRadio = document.getElementById('areaRadio');

let resistance;
let resistivity = v1;
let lengthoftheconductor = v2;
let area = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

resistanceRadio.addEventListener('click', function() {
  variable1.textContent = '(ρ) Resistivity (ohms x meters)';
  variable2.textContent = '(L) Length of the conductor (m)';
  variable3.textContent = '(A) Area (m²)';
  resistivity = v1;
  lengthoftheconductor = v2;
  area = v3;
  result.textContent = '';
});

resistivityRadio.addEventListener('click', function() {
  variable1.textContent = '(R) Resistance (Ω)';
  variable2.textContent = '(L) Length of the conductor (m)';
  variable3.textContent = '(A) Area (m²)';
  resistance = v1;
  lengthoftheconductor = v2;
  area = v3;
  result.textContent = '';
});

lengthoftheconductorRadio.addEventListener('click', function() {
  variable1.textContent = '(R) Resistance (Ω)';
  variable2.textContent = '(ρ) Resistivity (ohms x meters)';
  variable3.textContent = '(A) Area (m²)';
  resistance = v1;
  resistivity = v2;
  area = v3;
  result.textContent = '';
});

areaRadio.addEventListener('click', function() {
  variable1.textContent = '(R) Resistance (Ω)';
  variable2.textContent = '(ρ) Resistivity (ohms x meters)';
  variable3.textContent = '(L) Length of the conductor (m)';
  resistance = v1;
  resistivity = v2;
  lengthoftheconductor = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(resistanceRadio.checked)
    result.textContent = `Resistance = ${computeResistance().toFixed(2)} Ω`;

  else if(resistivityRadio.checked)
    result.textContent = `Resistivity = ${computeResistivity().toFixed(2)} ohms x meters`;

  else if(lengthoftheconductorRadio.checked)
    result.textContent = `Length of the conductor = ${computeLengthoftheconductor().toFixed(2)} m`;

  else if(areaRadio.checked)
    result.textContent = `Area = ${computeArea().toFixed(2)} m²`;
})

// calculation

function computeResistance() {
  return (Number(resistivity.value) * Number(lengthoftheconductor.value)) / Number(area.value);
}

function computeResistivity() {
  return (Number(resistance.value) * Number(area.value)) / Number(lengthoftheconductor.value);
}

function computeLengthoftheconductor() {
  return Number(resistance.value) * (Number(area.value) / Number(resistivity.value));
}

function computeArea() {
  return (Number(resistivity.value) * Number(lengthoftheconductor.value)) / Number(resistance.value);
}