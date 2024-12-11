const brackets = document.querySelector('#brackets');
import { generateBtn, playerStats } from './players.js';

let numberOfBrackets = 0;

//Generates a new tournament bracket
function newBracket() {
    numberOfBrackets++;

    const minimize = document.createElement('div');
    minimize.classList.add('minimize');
    minimize.style.color = '#fff';
    minimize.style.background = 'rgba(255, 255, 255, 0.05)';
    minimize.style.borderTopLeftRadius = '10px';
    minimize.style.borderTopRightRadius = '10px';
    minimize.style.width = '482px';
    minimize.style.padding = '10px 15px 10px 15px';

    const miniBtn = document.createElement('button');
    miniBtn.style.background = 'none';
    miniBtn.style.border = '0';
    miniBtn.textContent = 'V';
    miniBtn.style.color = '#fff';
    miniBtn.addEventListener('click', function() {
        if (document.getElementById('bracket-' + numberOfBrackets).style.display == 'flex') {
            document.getElementById('bracket-' + numberOfBrackets).style.display = 'none';
        } else {
            document.getElementById('bracket-' + numberOfBrackets).style.display = 'flex';
        }
    })

    const bracketContainer = document.createElement('div');
    bracketContainer.id = 'bracket-' + numberOfBrackets;
    bracketContainer.classList.add('bracket-container');
    bracketContainer.style.background = 'rgba(255, 255, 255, 0.05)';
    bracketContainer.style.borderBottomLeftRadius = '10px';
    bracketContainer.style.borderBottomRightRadius = '10px';
    bracketContainer.style.padding = '0 15px 0 15px';
    bracketContainer.style.display = 'flex';

    const quarterFinals = document.createElement('div');
    quarterFinals.id = 'round-one-' + numberOfBrackets;
    quarterFinals.classList.add('round');

    const semiFinals = document.createElement('div');
    semiFinals.id = 'round-two-' + numberOfBrackets;
    semiFinals.classList.add('round');

    const finals = document.createElement('div');
    finals.id = 'round-three-' + numberOfBrackets;
    finals.classList.add('round');

    const quarterFinalsList = document.createElement('ul');
    quarterFinalsList.id = 'round-one-ul-' + numberOfBrackets;

    const semiFinalsList = document.createElement('ul');
    semiFinalsList.id = 'round-two-ul-' + numberOfBrackets;

    const finalsList = document.createElement('ul');
    finalsList.id = 'round-two-ul-' + numberOfBrackets;

    for (let i = 0; i < 8; i++) {
        const line = document.createElement('li');
        line.id = 'round-one-line-' + [i];
        line.classList.add('line', 'round-one-line');
        line.textContent = 'R1 player ' + [i] + ' (score)';

        if (i == 1 || i == 5) {
            line.style.borderTop = '1px solid #fff';
            line.style.borderRight = '1px solid #fff';
        } else if (i == 2 || i == 6) {
            line.style.borderBottom = '1px solid #fff';
            line.style.borderRight = '1px solid #fff';
            line.style.lineHeight = '50px';
        } else if (i == 0 || i == 4) {
            line.style.lineHeight = '50px';
        } else {
            line.style.lineHeight = '20px';
        }

        quarterFinalsList.appendChild(line);
    }

    for (let j = 0; j < 4; j++) {
        const line = document.createElement('li');
        line.id = 'round-two-line-' + [j];
        line.classList.add('line', 'round-two-line');
        line.textContent = 'R2 player ' + [j] + ' (score)';

        if (j == 1) {
            line.style.borderRight = '1px solid #fff';
            line.style.lineHeight = '20px';
        } else if (j == 2) {
            line.style.borderBottom = '1px solid #fff';
            line.style.borderRight = '1px solid #fff';
        } else if (j == 3) {
            line.style.lineHeight = '20px';
        } else {
            line.style.borderBottom = '1px solid #fff';
        }

        semiFinalsList.appendChild(line);
    }

    for (let k = 0; k < 2; k++) {
        const line = document.createElement('li');
        line.id = 'round-three-line-' + [k];
        line.classList.add('line', 'round-three-line');
        line.textContent = 'R3 player ' + [k] + ' (score)';

        if (k == 1) {
            line.style.lineHeight = '20px';
        } else {
            line.style.borderBottom = '1px solid #fff';
        }

        finalsList.appendChild(line);
    }
    
    minimize.appendChild(miniBtn);
    bracketContainer.append(quarterFinalsList, semiFinalsList, finalsList);
    brackets.append(minimize, bracketContainer);
}

//Generates brackets based on player count
function normalBracket() {
    let num = playerStats.length;
    num = num / 8;
    
    if (num >= 1) {
        for (let i = 0; i < num; i++) {
            newBracket();
        }
    }
}

generateBtn.addEventListener('click', normalBracket);