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
//? *********************************************************



// Link DOM elements
const grid = document.querySelector('.grid');
const selectElement = document.getElementById('difficulty');
const button = document.querySelector('button');
const scoreElement = document.getElementById('score-element');



// * PHASE 2
// Button click - Create Variables 
button.addEventListener('click', function () {

    // Create score var and array
    let score = '';
    const clickedCells = [];

    grid.innerHTML = '';

    const difficulty = parseInt(selectElement.value);
    let selectedCell = '';
    console.log(difficulty);

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

                selectedCell = currentCell.dataset.cell;

                // Add class selected on cell
                currentCell.classList.toggle('active');

                // Print selected cell number on console 
                console.log(selectedCell);
            }
            )
        }


    }
})