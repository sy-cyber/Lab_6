let button1=document.querySelector("#btn1");
let txt=document.querySelector('#txt1');

button1.addEventListener("click", ()=>{
    let a=document.querySelector('#inp1').value;
    let b=document.querySelector('#inp2').value;
    c=Number(a)+Number(b);

    txt.innerHTML="Результат: "+(c);
}
)


let button2=document.querySelector('#btn2');
button2.addEventListener('click', addCircle);
function addCircle(){
    let newCircle=document.createElement('div');
    tsk2.appendChild(newCircle);
    newCircle.classList.add('circle');
    
}

let button3 = document.querySelector('#btn3');
button3.addEventListener('click', () => {
    let a = document.querySelector('#inp3').value;
    let b = document.querySelector('#inp4').value;
    let c = document.querySelector('#inp5').value;
    
    let sum = Number(a) + Number(b) + Number(c);
    let txt2 = document.querySelector('#txt2');
    txt2.innerHTML = "Результат: " + sum;
});

let button4 = document.querySelector('#btn4');
button4.addEventListener('click', addSquare);

function addSquare() {
    let newSquare = document.createElement('div');
    tsk4.appendChild(newSquare);
    newSquare.classList.add('square');
}
