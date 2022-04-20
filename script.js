const container = document.querySelector('#container');

let rows =  document.getElementsByClassName("row");

for (row = 0; row < 16; row++){
    const squareDiv = document.createElement('div');
    container.appendChild(squareDiv).className ="row";
}


for (i = 0; i < 16; i++){
    for (j = 0; j < 16; j++) {
        const cell = document.createElement("div");
        rows[j].appendChild(cell).className ="cell";
    }
}

const allDivs = document.querySelectorAll('.row .cell');
allDivs.forEach(div => div.addEventListener('mouseover', mouseOver));

function mouseOver() {
    this.classList.add('transform');
  }

  

// const squareDiv = document.createElement('div');
// container.appendChild(squareDiv);