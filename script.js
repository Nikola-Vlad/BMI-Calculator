const usUnitsBtn = document.querySelector(".imperial-units-btn");
const metricUnitsBtn = document.querySelector(".metric-units-btn");

const usHeightLayout = document.querySelector(".imperial-height-flex-container");
const usWeightLayout = document.querySelector(".imperial-weight-field");

const metricHeightLayout = document.querySelector(".metric-height-field");
const metricWeightLayout = document.querySelector(".metric-weight-field");

usUnitsBtn.classList.add('active');

usUnitsBtn.addEventListener("click", onUsUnitsClick);

function onUsUnitsClick () {
    metricHeightLayout.style.display = 'none';
    metricWeightLayout.style.display = 'none';
    usHeightLayout.style.display = 'flex';
    usWeightLayout.style.display = 'block';
    usUnitsBtn.classList.add('active');
    metricUnitsBtn.classList.remove('active');
}

metricUnitsBtn.addEventListener("click", onMetricUnitsClick);

function onMetricUnitsClick () {
    usHeightLayout.style.display = 'none';
    usWeightLayout.style.display = 'none';
    metricHeightLayout.style.display = 'block';
    metricWeightLayout.style.display = 'block';
    metricUnitsBtn.classList.add('active');
    usUnitsBtn.classList.remove('active');
}

