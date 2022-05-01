var zero, expenses, balance, earnings;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

// Describe this function...
function add_to_total() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  balance.push(getNumberOrString(document.getElementById('text').value));
  let element_total = document.getElementById('total');
  element_total.innerText = balance.reduce((a,b) => a+b, 0);
}


zero = 0;
expenses = [];
earnings = [];
balance = [];


document.getElementById('button').addEventListener('click', (event) => {
  if (getNumberOrString(document.getElementById('text').value) < zero) {
    expenses.unshift(getNumberOrString(document.getElementById('text').value));
    add_to_total();
    let element_exps = document.getElementById('exps');
    let new_li = document.createElement('li');
    new_li.innerText = getNumberOrString(document.getElementById('text').value);

    element_exps.appendChild(new_li);
    let element_expense_tot = document.getElementById('expense_tot');
    element_expense_tot.innerText = expenses.reduce((a,b) => a+b, 0);
  } else if (getNumberOrString(document.getElementById('text').value) >= zero) {
    earnings.unshift(getNumberOrString(document.getElementById('text').value));
    add_to_total();
    let element_earns = document.getElementById('earns');
    let new_li2 = document.createElement('li');
    new_li2.innerText = getNumberOrString(document.getElementById('text').value);

    element_earns.appendChild(new_li2);
    let element_earns_tot = document.getElementById('earns_tot');
    element_earns_tot.innerText = earnings.reduce((a,b) => a+b, 0);
  }

});