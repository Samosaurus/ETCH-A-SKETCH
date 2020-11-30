//hover broken plz fix
let square = 16;
const main = document.querySelector('.main');
main.style.gridAutoRows=`${100/square}%`;
main.style.gridAutoColumns=`${100/square}%`;

const button = document.querySelector('button');
let numInput = document.getElementById("numsquares");
let numSquares = parseInt(document.getElementById("numsquares").value, 10);
let pixel = document.querySelector('.child');

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
};

squareDraw(numSquares);

button.addEventListener("click", () => {
    numSquares = parseInt(document.getElementById("numsquares").value, 10);
    squareDraw(numSquares);
});

numInput.addEventListener("keypress", function (e) {

    console.log("ecode" + e.code + " keyCode: " + e.keyCode);
    if (e.keyCode === 13) {
        e.preventDefault();
        button.click();
    }

});


