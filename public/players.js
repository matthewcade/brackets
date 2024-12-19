const players = document.querySelector('#players');
const add = document.querySelector('#add');
const generate = document.querySelector('#generate');

//Add Player button
const addBtn = document.createElement('button');
addBtn.id = 'addplayer';
addBtn.textContent = 'Add Player';

//Container for all player info
const playerInfo = document.createElement('div');
playerInfo.id = 'player-info';

//Player columns
const playersColumn = document.createElement('div');
playersColumn.id = 'players-column';
playersColumn.classList.add('column');

const entriesColumn = document.createElement('div');
entriesColumn.id = 'entries-column';
entriesColumn.classList.add('column');

const handicapColumn = document.createElement('div');
handicapColumn.id = 'handicap-column';
handicapColumn.classList.add('column');

const gamesColumn = document.createElement('div');
gamesColumn.id = 'games-column';
gamesColumn.classList.add('column');

const removeColumn = document.createElement('div');
removeColumn.id = 'remove-column';
removeColumn.classList.add('column');

//Player headers
const playerNames = document.createElement('div');
playerNames.id = 'players-header';
playerNames.classList.add('header');
playerNames.textContent = 'Players';

const playerEntries = document.createElement('div');
playerEntries.id = 'entries-header';
playerEntries.classList.add('header');
playerEntries.textContent = 'Entries';

const playerHandicaps = document.createElement('div');
playerHandicaps.id = 'handicaps-header';
playerHandicaps.classList.add('header');
playerHandicaps.textContent = 'Handicap';

const playerGames = document.createElement('div');
playerGames.id = 'games-header';
playerGames.classList.add('header');
playerGames.textContent = 'Games';

const removeHeader = document.createElement('div');
removeHeader.id = 'remove-header';
removeHeader.classList.add('header');
removeHeader.textContent = 'x';
removeHeader.style.color = '#000';

removeColumn.appendChild(removeHeader);
playersColumn.appendChild(playerNames);
entriesColumn.appendChild(playerEntries);
handicapColumn.appendChild(playerHandicaps);
gamesColumn.appendChild(playerGames);
playerInfo.append(removeColumn, playersColumn, entriesColumn, handicapColumn, gamesColumn);

let playerCount = 1;
let bowlerIds = [];

//Add Player
function newPlayer() {
    const bowlerId = playerCount;
    bowlerIds.push(playerCount);

    const name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.id = 'name-' + playerCount;
    name.classList.add('player-info');
    name.setAttribute('placeholder', 'Enter Bowler Name');

    const entries = document.createElement('input');
    entries.setAttribute('type', 'number');
    entries.id = 'entries-' + playerCount;
    entries.classList.add('player-info');
    entries.style.width = '50px';

    const handicap = document.createElement('input');
    handicap.setAttribute('type', 'number');
    handicap.id = 'handicap-' + playerCount;
    handicap.style.width = '50px';
    handicap.classList.add('player-info');

    const playersGamesContainer = document.createElement('div');
    playersGamesContainer.id = 'container-' + playerCount;
    playersGamesContainer.classList.add('games-container');

    const gameOne = document.createElement('input');
    gameOne.setAttribute('type', 'number');
    gameOne.id = 'gameone-' + playerCount;
    gameOne.classList.add('game', 'player-info');
    gameOne.style.width = '50px';

    const gameTwo = document.createElement('input');
    gameTwo.setAttribute('type', 'number');
    gameTwo.id = 'gametwo-' + playerCount;
    gameTwo.classList.add('game', 'player-info');
    gameTwo.style.width = '50px';

    const gameThree = document.createElement('input');
    gameThree.setAttribute('type', 'number');
    gameThree.id = 'gamethree-' + playerCount;
    gameThree.classList.add('game', 'player-info');
    gameThree.style.width = '50px';

    const removeBtn = document.createElement('button');
    removeBtn.id = 'remove-' + playerCount;
    removeBtn.classList.add('remove-button');
    removeBtn.textContent = 'X';
    removeBtn.addEventListener('click', function() {
        const arrayIndex = bowlerIds.indexOf(bowlerId);
        bowlerIds.splice(arrayIndex, 1);
        document.getElementById(name.id).remove();
        document.getElementById(entries.id).remove();
        document.getElementById(handicap.id).remove();
        document.getElementById(playersGamesContainer.id).remove();
        this.remove();
    });

    playersGamesContainer.append(gameOne, gameTwo, gameThree);
    playersColumn.append(name);
    entriesColumn.append(entries);
    handicapColumn.append(handicap);
    gamesColumn.appendChild(playersGamesContainer);
    removeColumn.appendChild(removeBtn);
    playerCount++;
}

addBtn.addEventListener('click', newPlayer);

export let playerStats = [];

function generateStats(p) {    
    let newP = [document.getElementById('name-' + p).value, Number(document.getElementById('entries-' + p).value), Number(document.getElementById('handicap-' + p).value), Number(document.getElementById('gameone-' + p).value), Number(document.getElementById('gametwo-' + p).value), Number(document.getElementById('gamethree-' + p).value)];
    playerStats.push(newP);
}

//Generate button to process player information
export const generateBtn = document.createElement('button');
generateBtn.id = 'generate-button';
generateBtn.textContent = 'Generate';
generateBtn.addEventListener('click', function() {
    playerStats = [];
    bowlerIds.forEach(generateStats);
})

add.appendChild(addBtn);
generate.appendChild(generateBtn);
players.appendChild(playerInfo);
newPlayer();