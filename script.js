function renderBoard(n) {
    if (n>100) n=100;
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
            row.append(square);
        }

        container.append(row);
    }
}


renderBoard(16);