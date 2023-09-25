function renderBoard(n) {
    console.log(`rendering board`);
    if (n>200) n=200;
    let rowList = []; //row of n div nodes

    for (let i=0; i<n; i++){
        let rowEle = document.createElement('div');
        rowList.push(rowEle);
    }

    let container = document.querySelector('.container');

    for (let i=0; i<n; i++){

        let row = rowList[i];
        row.style.display = 'flex';
        row.style.flex = 1;

        for (let j=0; j<n; j++){
            let square = document.createElement('div');
            square.style.flex = 1;
            square.classList.add('square');
            square.addEventListener('mouseenter', e => {
                let color = isClassic ? '#ff8c22' : getRandomColor();
                e.target.style.backgroundColor = color;
            });
            row.append(square);
        }

        container.append(row);
    }
}

let size = 100;

//classic - color mode
let isClassic = false;
let classicButton = document.getElementById('classic');
let colorButton = document.getElementById('color');
classicButton.addEventListener('click', (e) => {
    isClassic=true;
    document.querySelector(`.container`).innerHTML = '';
    renderBoard(size);
});
colorButton.addEventListener('click', () => {
    isClassic=false;
    document.querySelector(`.container`).innerHTML = '';
    renderBoard(size);
});

//asking grid size input from user
const sizeButton = document.querySelector('#grid-size');
sizeButton.addEventListener('click', e => {
    let temp = prompt('Enter the dimensions of Sketch Pad (Enter 25 if 25*25 grid)');
    size = temp ? temp : size;
    document.querySelector(`.container`).innerHTML = '';
    renderBoard(size);
})

//reset the board
document.querySelector('#reset').addEventListener('click', () => {
    document.querySelector(`.container`).innerHTML = '';
    renderBoard(size);
});

//method to create random color
function getRandomColor() {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    // let a = Math.random();
    return `rgb(${r},${g},${b},${0.8})`;
}

renderBoard(size);