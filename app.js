// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

let catchphrases = [];


headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    // console.log('showing selection', headDropdown.value);
    // increment the head change count state
    headCount++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url('./assets/${headDropdown.value}.png')`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    // console.log('showing selection', middleDropdown.value);
    // increment the middle change count state
    middleCount++;
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleEl.style.backgroundImage = `url('./assets/${middleDropdown.value}.png')`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    // console.log('showing selection', bottomDropdown.value);
    // increment the bottom change count state
    bottomCount++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url('./assets/${bottomDropdown.value}.png')`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    // console.log('inputting', catchphraseButton.value);
    // push the new catchphrase to the catchphrase array in state
    catchphrases.push(catchphraseInput.value);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = ' ';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();
});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `Whoa! You've swapped heads a total of ${headCount} times, middle a total of ${middleCount} times, and bottom ${bottomCount} times!`;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = ' ';
    // loop through each catchphrase in state
    for (let catchphraseInput of catchphrases) {
        const catchphraseText = document.createElement('div');

        document.getElementById('catchphrases').append(catchphraseText);
        catchphraseText.textContent = catchphraseInput;
    }
    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    
    // and append that HTML element to the cleared-out DOM
}
