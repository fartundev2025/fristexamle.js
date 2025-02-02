//  var newElement.docment.createElement("p");
// newElement.textContent="ku soo dhawaw websitekeyga";
//  docment.body.appendChild( newElement)


// document.write("hellow dev+")
// console.log("hellow dev+")

// getElementById example - hal element soo qaadaya
const mainTitle = document.getElementById('mainTitle');
mainTitle.style.color = 'blue';
mainTitle.innerHTML = 'DOM Manipulation - Updated!';

// getElementsByClassName example - dhammaan elementska class-ka leh
const boxes = document.getElementsByClassName('box');
for(let i = 0; i < boxes.length; i++) {
    boxes[i].style.border = '2px solid green';
}

// getElementsByTagName example - dhammaan elementska tag-ga leh
const paragraphs = document.getElementsByTagName('p');
for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontStyle = 'italic';
    paragraphs[i].style.color = 'red';
}

// Event listener example
const changeButton = document.getElementById('changeBtn');
changeButton.addEventListener('click', function() {
    // Wuxuu badali doonaa midabka box-yada markaad button-ka riixdo
    const boxes = document.getElementsByClassName('box');
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = getRandomColor();
    }
});

// Function-kan wuxuu soo saari doonaa midab random ah
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
 