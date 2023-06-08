console.log('JS OK')

// *PHASE 1

//? *********************** Functions ***********************
// Create Function for cells
function createCell(numero) {
    let element = '';
    for (let i = 1; i <= numero; i++) {
        element += `<div class="cell cell-${numero}" data-cell="${i}">${i}</div>`;
    }
    return element;
}

// Functions for createBombs
function createBombs(number, maxNumber) {
    let generatedNumbers = [];

    while (generatedNumbers.length < number) {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        } while (generatedNumbers.includes(randomNumber));
        generatedNumbers.push(randomNumber);
    }
    return generatedNumbers;
}
//? *********************************************************



// Link DOM elements
const grid = document.querySelector('.grid');
const selectElement = document.getElementById('difficulty');
const button = document.querySelector('button');
const scoreElement = document.getElementById('score-element');
let bombs = [];


// * PHASE 2
// Button play click - Create Variables 
button.addEventListener('click', function () {

    // Create score var and array
    let score = '';
    const clickedCells = [];
    console.log(clickedCells);
    grid.innerHTML = '';

    const difficulty = parseInt(selectElement.value);
    let selectedCell = '';
    console.log('Il valore di difficulty è: ' + difficulty);

    // Create bombs variable
    bombs = createBombs(16, difficulty);
    console.log('Il valore di bombs è: ' + bombs);


    // ! Validation ********
    if (difficulty !== 100 && difficulty !== 81 && difficulty !== 49) {

        console.log('Seleziona una difficoltà dal menù!');
        grid.innerHTML = '<img class="img-error" src="./img/hackerman.jpg" alt="Foto mr robot">';

    } else {
        // Inject string in DOM
        grid.innerHTML = createCell(difficulty);

        // Create array with all cells
        const cells = document.querySelectorAll('.cell');

        // Click on selected cell
        for (let i = 0; i < difficulty; i++) {

            const currentCell = cells[i];

            currentCell.addEventListener('click', function () {


                if (clickedCells.includes(currentCell.dataset.cell)) {
                    console.log('Cella già cliccata!');

                } else {
                    // Score counter
                    scoreElement.innerText = ++score;

                    selectedCell = currentCell.dataset.cell;

                    // Add class selected on cell
                    currentCell.classList.add('active');

                    // Print selected cell number on console 
                    console.log(selectedCell);

                    // Add cell to array
                    clickedCells.push(selectedCell);
                }
            }
            )
        }
    }
})