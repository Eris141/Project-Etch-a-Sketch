const gridContainer = document.querySelector('.container');

// crate a loop and put 16 x 16 divs inside
let gridSquare = 16;

for (let i = 0; i < gridSquare; i++) {
  for (let j = 0; j < gridSquare; j++) {
    let rows = document.createElement('div');
    rows.classList.add('rows');
    gridContainer.appendChild(rows);
    //addin color to each div
    rows.addEventListener('mouseover', (e) => {
      e.target.classList.add('color');
    })
  }
}
