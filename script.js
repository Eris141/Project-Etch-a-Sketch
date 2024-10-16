const gridContainer = document.querySelector('.container');

// crate a loop and put 16 x 16 divs inside

function createGrid(gridSquare = 16) {
  gridContainer.innerHTML = '';

  for (let i = 0; i < gridSquare; i++) {
    let rows = document.createElement('div');
    rows.classList.add('rows');

    const cellSise = 900 / gridSquare;// each cell will be 900/gid

    for (let j = 0; j < gridSquare; j++) {
      let border = document.createElement('div');
      border.classList.add('border');
      border.style.width = `${cellSise}px`;
      border.style.height =  `${cellSise}px`
      rows.appendChild(border);
    }  

    gridContainer.appendChild(rows);
    rows.addEventListener('mouseover', (e) => {
      if (e.target.classList.contains("border")) {
        e.target.classList.add('color');
      }
    })
  }
  }

const divButton = document.createElement('div')
const button = document.createElement("button");
button.textContent = "Add Squares";
button.classList.add("button");
divButton.classList.add("btndiv");
document.body.appendChild(divButton);
divButton.appendChild(button);


divButton.addEventListener('click', () => {
  const squareNumber = prompt("Add a number for quare (from 1 to 100)");
  

  if (squareNumber === '' || isNaN(squareNumber) || squareNumber < 1 || squareNumber > 100) {
    alert("please add a number between 1 and  100.");
  } else {
   createGrid(Number(squareNumber));
  }
})

createGrid();