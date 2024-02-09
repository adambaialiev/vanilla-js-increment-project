document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const increaseBtn = document.getElementById('increaseBtn');

    increaseBtn.addEventListener('click', function () {
        let currentNumber = parseInt(display.textContent, 10);
        display.textContent = currentNumber + 1;
    });
});