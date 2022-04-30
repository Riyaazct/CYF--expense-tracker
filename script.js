var earnings, expenses, zero;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


earnings = [];
expenses = [];
zero = 0;


document.getElementById('button').addEventListener('click', (event) => {
  if (getNumberOrString(document.getElementById('text').value) >= zero) {
    earnings.push(getNumberOrString(document.getElementById('text').value));
    let element_earns = document.getElementById('earns');
    let new_li = document.createElement('li');
    new_li.innerText = getNumberOrString(document.getElementById('text').value);

    element_earns.appendChild(new_li);
    let element_earns_tot = document.getElementById('earns_tot');
    element_earns_tot.innerText = earnings.reduce((a,b) => a+b, 0);
    let element_total = document.getElementById('total');
    element_total.innerText = earnings.reduce((a,b) => a+b, 0);
  } else if (false) {
  }

});