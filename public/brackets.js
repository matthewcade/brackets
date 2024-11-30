const brackets = document.querySelector('#brackets');

let numberOfBrackets = 0;

function newBracket() {
    numberOfBrackets++;

    const bracketContainer = document.createElement('div');
    bracketContainer.classList.add('bracket-container');

    const roundOne = document.createElement('div');
    roundOne.id = 'round-one-' + numberOfBrackets;
    roundOne.classList.add('round');

    const roundTwo = document.createElement('div');
    roundTwo.id = 'round-two-' + numberOfBrackets;
    roundTwo.classList.add('round');

    const roundThree = document.createElement('div');
    roundThree.id = 'round-three-' + numberOfBrackets;
    roundThree.classList.add('round');

    const roundOneList = document.createElement('ul');
    roundOneList.id = 'round-one-ul-' + numberOfBrackets;

    const roundTwoList = document.createElement('ul');
    roundTwoList.id = 'round-two-ul-' + numberOfBrackets;

    const roundThreeList = document.createElement('ul');
    roundThreeList.id = 'round-two-ul-' + numberOfBrackets;

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

        roundOneList.appendChild(line);
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

        roundTwoList.appendChild(line);
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

        roundThreeList.appendChild(line);
    }
    
    bracketContainer.append(roundOneList, roundTwoList, roundThreeList);
    brackets.append(bracketContainer);
}

newBracket();
newBracket();