const display = document.getElementById('display');

let huidig = '0';
let vorig = null;
let operator = null;
let nieuwGetal = false;

function toon() {
  display.textContent = huidig.replace('.', ',');
}

function kiesCijfer(cijfer) {
  if (nieuwGetal || huidig === '0') {
    huidig = cijfer;
    nieuwGetal = false;
  } else {
    huidig += cijfer;
  }
}

function kiesKomma() {
  if (nieuwGetal) {
    huidig = '0.';
    nieuwGetal = false;
  } else if (!huidig.includes('.')) {
    huidig += '.';
  }
}

function kiesOperator(op) {
  if (operator !== null && !nieuwGetal) rekenUit();
  vorig = parseFloat(huidig);
  operator = op;
  nieuwGetal = true;
}

function rekenUit() {
  if (operator === null) return;
  huidig = String(bereken(vorig, operator, parseFloat(huidig)));
  operator = null;
  nieuwGetal = true;
}

function wis() {
  huidig = '0';
  vorig = null;
  operator = null;
  nieuwGetal = false;
}

document.querySelector('.toetsen').addEventListener('click', (event) => {
  const knop = event.target.closest('button');
  if (!knop) return;

  if (knop.dataset.cijfer) kiesCijfer(knop.dataset.cijfer);
  else if (knop.dataset.operator) kiesOperator(knop.dataset.operator);
  else if (knop.dataset.actie === 'komma') kiesKomma();
  else if (knop.dataset.actie === 'is') rekenUit();
  else if (knop.dataset.actie === 'wissen') wis();

  toon();
});