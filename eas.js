//hover broken plz fix

const main = document.querySelector('.main');

const button = document.querySelector('button');
let numInput = document.getElementById("numsquares");

let numSquares = Number(document.getElementById("numsquares").value);

let colorInput = document.getElementById("colour");
let color = 'red';

const colours = [
    'hsl(0, 100%, 50%)', 
    'hsl(39, 100%, 50%)', 
    'hsl(60, 100%, 50%)', 
    'hsl(120, 100%, 25%)', 
    'hsl(240, 100%, 50%)', 
    'hsl(275, 100%, 25%)',
    'hsl(300, 100%, 25%)'
];

function squareDraw(square){

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

    main.style.gridAutoRows=`${100/square}%`;
    main.style.gridAutoColumns=`${100/square}%`;

    pixelColors();
};

squareDraw(numSquares);

button.addEventListener("click", () => {
    numSquares = Number(document.getElementById("numsquares").value);
    if (numSquares > 100) {
        alert("Sorry, max size is 100x100!");
        numSquares == 100;
    }
    main.innerHTML = "";
    squareDraw(numSquares);
});

numInput.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        button.click();
    }
});

function pixelColors( ) {
    let pixelList = document.querySelectorAll(".child");

    colorInput.addEventListener("change", (e) => {
        color = e.target.value;
    });

    pixelList.forEach(
        function(pixel) {

            let i = 0; //rainbow iterator
            let j = 1; //random iterator

            pixel.addEventListener("mouseover", (e) => {
                
                console.log(e.target.style.backgroundColor);

                if (color == 'rainbow') {
                    let colorPick = colours[i % colours.length];
                    pixel.style.backgroundColor = colorPick; 
                    i++;
                } else if (color == 'random') {
                    if (j == 1) {
                        let R = randomInteger(0,255);
                        let G = randomInteger(0,255);
                        let B = randomInteger(0,255);
                        pixel.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
                        j++;
                    }
                    let rgbArray = e.target.style.backgroundColor.substring(4,).split(', ').join(')').split(')');
                    console.log(rgbArray);
                    let newRGBArray = rgbArray.map(e => parseInt(e) - (parseInt(e)/100*10));
                    console.log(newRGBArray);
                    pixel.style.backgroundColor = `rgb(
                        ${newRGBArray.slice(0,1)}, 
                        ${newRGBArray.slice(1,2)}, 
                        ${newRGBArray.slice(2,3)})`;
                    console.log(e.target.style.backgroundColor);
                }  else {
                pixel.style.backgroundColor = color;
                };   
            });
    });
    /* for of loop version, also works
    for (let pixel of pixelList) {
        pixel.addEventListener('mouseover', (e) => {
            console.log(e.target.id);
            pixel.style.backgroundColor = 'red';
        })
    };*/

};

function randomInteger(min,max){
    return Math.floor(Math.random() * (max-min-1))+min;
};
