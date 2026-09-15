const imperialUnitsBtn = document.querySelector('.imperial-units-btn');
const metricUnitsBtn = document.querySelector('.metric-units-btn');

const imperialHeightLayout = document.querySelector('.imperial-height-flex-container');
const imperialWeightLayout = document.querySelector('.imperial-weight-field');

const metricHeightLayout = document.querySelector('.metric-height-field');
const metricWeightLayout = document.querySelector('.metric-weight-field');

const calculateBtn = document.querySelector('.calculateBtn');
const bmiResultField = document.querySelector('.bmi-result');
const resetBtn = document.querySelector('.resetBtn');

const feetInput = document.querySelector('.feet-input-bar');
const inchesInput = document.querySelector('.inches-input-bar');
const lbsInput = document.querySelector('.lbs-input-bar');
const cmInput = document.querySelector('.cm-input-bar');
const kgInput = document.querySelector('.kg-input-bar');

const bmiValue = document.querySelector('.bmi-value');
const bmiCategory = document.querySelector('.bmi-category');

imperialUnitsBtn.addEventListener("click", onUsUnitsClick);

function onUsUnitsClick() {
    metricHeightLayout.classList.add('hidden');
    metricWeightLayout.classList.add('hidden');

    imperialHeightLayout.classList.remove('hidden');
    imperialWeightLayout.classList.remove('hidden');

    imperialUnitsBtn.classList.add('active');
    metricUnitsBtn.classList.remove('active');
}

metricUnitsBtn.addEventListener("click", onMetricUnitsClick);

function onMetricUnitsClick() {
    imperialHeightLayout.classList.add('hidden');
    imperialWeightLayout.classList.add('hidden');

    metricHeightLayout.classList.remove('hidden');
    metricWeightLayout.classList.remove('hidden');

    metricUnitsBtn.classList.add('active');
    imperialUnitsBtn.classList.remove('active');
}

calculateBtn.addEventListener('click', onCalculate);

bmiResultField.classList.add('hidden');

let currentCategory;

function onCalculate() {
    let oldCategory = currentCategory;
    bmiCategory.classList.remove(oldCategory);

    const feet = Number(feetInput.value);
    const inches = Number(inchesInput.value);
    const lbs = Number(lbsInput.value);
    const cm = Number(cmInput.value);
    const kg = Number(kgInput.value);

    if (imperialUnitsBtn.classList.contains('active')) {

        if (feet <= 0 || feet > 8 || inches < 0 || inches >= 12 || lbs <= 0 || lbs > 500) {
            alert('Please enter valid values!');
            return;
        }
        bmiResultField.classList.remove('hidden');

        const totalInches = feet * 12 + inches;
        const bmi = (lbs / (totalInches * totalInches)) * 703;
        bmiValue.textContent = bmi.toFixed(1);

        if (bmi < 18.5) {
            bmiCategory.classList.add('category-underweight');
            bmiCategory.textContent = 'Underweight';
            currentCategory = 'category-underweight';
        } else if (bmi < 25) {
            bmiCategory.classList.add('category-normal');
            bmiCategory.textContent = 'Normal';
            currentCategory = 'category-normal';
        } else if (bmi < 30) {
            bmiCategory.classList.add('category-overweight');
            bmiCategory.textContent = 'Overweight';
            currentCategory = 'category-overweight';
        } else {
            bmiCategory.classList.add('category-obese');
            bmiCategory.textContent = 'Obese';
            currentCategory = 'category-obese';
        }

    } else {

        if (cm <= 0 || cm > 270 || kg <= 0 || kg > 500) {
            alert('Please enter valid values!');
            return;
        }

        bmiResultField.classList.remove('hidden')

        const heightInMeters = cm / 100;
        const bmi = kg / (heightInMeters * heightInMeters);
        bmiValue.textContent = bmi.toFixed(1);

        if (bmi < 18.5) {
            bmiCategory.classList.add('category-underweight')
            bmiCategory.textContent = 'Underweight';
            currentCategory = 'category-underweight';
        } else if (bmi < 25) {
            bmiCategory.classList.add('category-normal')
            bmiCategory.textContent = 'Normal';
            currentCategory = 'category-normal';
        } else if (bmi < 30) {
            bmiCategory.classList.add('category-overweight')
            bmiCategory.textContent = 'Overweight';
            currentCategory = 'category-overweight';
        } else {
            bmiCategory.classList.add('category-obese')
            bmiCategory.textContent = 'Obese';
            currentCategory = 'category-obese';
        }
    }

}

resetBtn.addEventListener('click', onReset)

function onReset() {
    feetInput.value = '';
    inchesInput.value = '';
    lbsInput.value = '';
    cmInput.value = '';
    kgInput.value = '';
    bmiResultField.classList.add('hidden')
}