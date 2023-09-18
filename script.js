function renderBoard(n) {
    if (n>100) n=100;
    let rowList = []; //row of n div nodes

    for (let i=0; i<n; i++){
        let rowEle = document.createElement('div');
        rowList.push(rowEle);
    }

    let container = document.querySelector('.container');

    for (let i=0; i<n; i++){

        let row = document.createElement('div');
        row.setAttribute('style','display: flex; flex: 1;');

        for (let j=0; j<n; j++) row.append(rowList[j]);

        container.append(row);
    }
}


renderBoard(4);