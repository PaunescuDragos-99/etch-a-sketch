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



