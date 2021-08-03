const currencyElement1 = document.getElementById('currency-one');
const currencyElement2 = document.getElementById('currency-two');
const amountElement1 = document.getElementById('amount-one');
const amountElement2 = document.getElementById('amount-two');

const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');

//fetch exchange rate and update DOM
function calculate() {
  const currencyOne = currencyElement1.value;
  const currencyTwo = currencyElement2.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currencyTwo];
      rateElement.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

      amountElement2.value = (amountElement1.value * rate).toFixed(2);
    });
}

// function calculate1() {
//   const currencyOne = currencyElement1.value;
//   const currencyTwo = currencyElement2.value;

//   fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
//     .then(res => res.json())
//     .then(data => {
//       const rate = data.rates[currencyTwo];
//       rateElement.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

//       amountElement1.value = (amountElement2.value / rate).toFixed(2);
//     });
// }

//event listeners
currencyElement1.addEventListener('change', calculate);
amountElement1.addEventListener('input', calculate);
currencyElement2.addEventListener('change', calculate);
amountElement2.addEventListener('input', calculate);
swap.addEventListener('click', () => {
  const temp = currencyElement1.value;
  currencyElement1.value = currencyElement2.value;
  currencyElement2.value = temp;
  calculate();
});

calculate();
