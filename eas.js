//hover broken plz fix
let square = 16;
const main = document.querySelector('.main');
main.style.gridAutoRows=`${100/square}%`;
main.style.gridAutoColumns=`${100/square}%`;

const button = document.querySelector('button');
let numInput = document.getElementById("numsquares");

let numSquares = parseInt(document.getElementById("numsquares").value, 10);

let colorInput = document.getElementById("colour");
let colorSelect = 'red';


const colours = [
    'red', 
    'orange', 
    'yellow', 
    'green', 
    'blue', 
    'indigo',
    'purple'
];

function squareDraw(square){

    main.style.gridAutoRows=`${100/square}%`;
    main.style.gridAutoColumns=`${100/square}%`;

    for (i = 1; i <= square; i++)
    for (j = 1; j <= square; j++)
    {
        const div = document.createElement('div');
        div.style.gridRowStart=`${j}`;
        div.style.gridColumnStart=`${i}`;
        div.setAttribute('class', 'child');
        div.setAttribute('id', `x: ${i}, y: ${j}`);
        div.style.backgroundColor = 'black';
        main.appendChild(div);
    };

    pixelColors();
};

squareDraw(numSquares);

button.addEventListener("click", () => {
    numSquares = parseInt(document.getElementById("numsquares").value, 10);
    squareDraw(numSquares);
});

numInput.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        button.click();
    }
});

colorInput.addEventListener("change", (e) => {
    console.log(`e.target.value = ${e.target.value + typeof e.target.value}`);
    colorSelect = e.target.value;
});

function pixelColors( ) {

    let pixelList = document.querySelectorAll(".child")

    pixelList.forEach(
        function(pixel) {
            pixel.addEventListener("mouseover", (e) => {
            console.log(e.target.id);
            pixel.style.backgroundColor = colorSelect;
        })
    });

    /* for of loop version, also works
    for (let pixel of pixelList) {
        pixel.addEventListener('mouseover', (e) => {
            console.log(e.target.id);
            pixel.style.backgroundColor = 'red';
        })
    };*/
};

