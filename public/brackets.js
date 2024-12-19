const brackets = document.querySelector('#brackets');
import { generateBtn, playerStats } from './players.js';

let numberOfBrackets = 0;
let lineCount = 1;

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

    const bracketTitle = document.createElement('div');
    bracketTitle.classList.add('bracket-title');
    bracketTitle.textContent = 'Bracket ' + numberOfBrackets;

    const titleSpace = document.createElement('div');
    titleSpace.style.width = '21px';
    titleSpace.style.height = '27px';

    let minimizeBracketId = 'bracket-' + numberOfBrackets;
    miniBtn.addEventListener('click', function() {
        if (document.getElementById(minimizeBracketId).style.display == 'flex') {
            document.getElementById(minimizeBracketId).style.display = 'none';
            minimize.style.marginBottom = '20px';
        } else {
            document.getElementById(minimizeBracketId).style.display = 'flex';
            minimize.style.marginBottom = '0';
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

    const quarterFinalsList = document.createElement('ul');
    quarterFinalsList.id = 'round-one-ul-' + numberOfBrackets;

    const semiFinalsList = document.createElement('ul');
    semiFinalsList.id = 'round-two-ul-' + numberOfBrackets;

    const finalsList = document.createElement('ul');
    finalsList.id = 'round-two-ul-' + numberOfBrackets;

    for (let i = 0; i < 8; i++) {
        const line = document.createElement('li');
        line.id = 'b' + numberOfBrackets + '-round-one-line-' + lineCount;
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
        lineCount++;
    }

    lineCount = 1;

    for (let j = 0; j < 4; j++) {
        let quarterLineCount = 1;
        
        const line = document.createElement('li');
        line.id = 'b' + numberOfBrackets + '-round-two-line-' + lineCount;
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
        lineCount++;
    }

    lineCount = 1;

    for (let k = 0; k < 2; k++) {
        const line = document.createElement('li');
        line.id = 'b' + numberOfBrackets + '-round-three-line-' + lineCount;
        line.classList.add('line', 'round-three-line');
        line.textContent = 'R3 player ' + [k] + ' (score)';

        if (k == 1) {
            line.style.lineHeight = '20px';
        } else {
            line.style.borderBottom = '1px solid #fff';
        }

        finalsList.appendChild(line);
        lineCount++;
    }
    
    lineCount = 1;
    minimize.append(miniBtn, bracketTitle, titleSpace);
    bracketContainer.append(quarterFinalsList, semiFinalsList, finalsList);
    brackets.append(minimize, bracketContainer);
}

//Generates brackets based on player count
function normalBracket() {
    brackets.innerHTML = '';
    let num = playerStats.length;
    num = num / 8;
    
    if (num >= 1) {
        for (let i = 0; i < num; i++) {
            newBracket();
        }
    }
}

//Assigns players to the brackets
function assignPlayers() {
    let bracketCount = numberOfBrackets + 1;
    let playerEntryCounter = playerStats; //Tracks the number of entries each player has remaining
    let remainingPlayers = playerStats; //Tracks players that have entries left
    let newBracket = []; //Holds the players for the new bracket
    let numOfEntries = 0; //Number of lines to account for
    let remainingLines = lineCount;
    let newLine = 1;

    //Ran for the number of full brackets
    for (let b = 1; b < bracketCount; b++) {
        let chosen = [];

        //Checks if less than 8 players in the game or if ghost bracket will be needed, currently runs alert
        if (remainingPlayers.length < 8) {
            alert('A minimum of 8 players must be listed');
        } else {
            for (let p = 0; p < 8; p++) {
                let randomNum = Math.floor(Math.random() * remainingPlayers.length);

                if (chosen.includes(randomNum)) {
                    p--;
                } else {
                    chosen.push(randomNum);
                    newBracket.push(remainingPlayers[randomNum]);
                    document.getElementById('b' + b + '-round-one-line-' + newLine).textContent = `${remainingPlayers[randomNum][0]} (${remainingPlayers[randomNum][3]})`;
                    document.getElementById('b' + b + '-round-one-line-' + newLine).setAttribute('data-bracket', b);
                    document.getElementById('b' + b + '-round-one-line-' + newLine).setAttribute('data-player', remainingPlayers.indexOf(remainingPlayers[randomNum]));
                    document.getElementById('b' + b + '-round-one-line-' + newLine).setAttribute('data-value', remainingPlayers[randomNum][3]);
                    const lineData = document.getElementById('b' + b + '-round-one-line-' + newLine);
                    console.log(lineData.dataset.player)

                    document.querySelector(`#gameone-${randomNum + 1}`).addEventListener('input', function() {
                        console.log(`Score Change: `);
                        lineData.dataset.value = document.querySelector(`#gameone-${randomNum + 1}`).value;
                    })
            
                    newLine++;
                }
            }
            console.log(chosen);
        }
        newLine = 1;
    }
    numberOfBrackets = 0;
    lineCount = 1;
    console.log(newBracket);
}

generateBtn.addEventListener('click', normalBracket);
generateBtn.addEventListener('click', assignPlayers);