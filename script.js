'use strict';

const numbers = document.querySelectorAll('.scores ul li');
const submitButton = document.getElementById('submit');
const firstStep = document.querySelector('.first-step');
const secondStep = document.querySelector('.second-step');
const resultSelected = document.querySelector('.results .selected');

let selectedNumber = 0;

numbers.forEach((number) => {
  number.addEventListener('click', function () {
    numbers.forEach((number) => {
      number.classList.remove('active');
    });

    number.classList.add('active');
    selectedNumber = number.textContent;

    console.log(`You clicked number ${number.textContent}`, selectedNumber);
  });
});

submitButton.addEventListener('click', function () {
  firstStep.classList.remove('active');
  secondStep.classList.add('active');
  resultSelected.textContent = selectedNumber;
});
