let color = "black";

createBoard(16);

function createBoard(size){
    let container = document.querySelector('.container');
    let squares = container.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let numDivs = size * size;

    for(let i = 1; i <= numDivs; i++){
        let grid = document.createElement('div');
        grid.className = 'grid';
        grid.addEventListener('mouseover', changeSquareColor);
        container.insertAdjacentElement("beforeend",grid);
    }
}

function changeSquareColor(){
    if(color == 'rainbow'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }else{
        this.style.backgroundColor = color;
    }
}

function changeColor(colorSelect){
    color = colorSelect;
    if(colorSelect == 'black'){
        document.querySelector('.button-a').style.backgroundColor = `#04AA6D`;
        document.querySelector('.button-b').style.backgroundColor = `white`;
        document.querySelector('.button-c').style.backgroundColor = `white`;
    }else if(colorSelect == 'white'){
        document.querySelector('.button-a').style.backgroundColor = `white`;
        document.querySelector('.button-b').style.backgroundColor = `rgb(0, 247, 255)`;
        document.querySelector('.button-c').style.backgroundColor = `white`;
    }else if(colorSelect == 'rainbow'){
        document.querySelector('.button-a').style.backgroundColor = `white`;
        document.querySelector('.button-b').style.backgroundColor = `white`;
        document.querySelector('.button-c').style.backgroundColor = `rgb(238, 68, 196)`;
    }else{
        document.querySelector('.button-a').style.backgroundColor = `white`;
        document.querySelector('.button-b').style.backgroundColor = `white`;
        document.querySelector('.button-c').style.backgroundColor = `white`;
    }
    console.log(color);
}

function changeSize(input){
    createBoard(input);
    let inputValue = document.querySelector('.slider-info');
    inputValue.textContent = `${input}x${input}`;
    console.log(color);
}

function chooseColor(value){
    return 'blue';
}

function resetBoard() {
    let container = document.querySelector('.container');
    let grid = container.querySelectorAll('div');
    grid.forEach(grid => grid.style.backgroundColor = `white`);
}


