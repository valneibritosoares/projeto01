

let ax = document.querySelector('#xa');
let bx = document.querySelector('#xb');
let dx = document.querySelector('#xd');
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let n1 = document.querySelector('#n1');
let n2 = document.querySelector('#n2');
let n3 = document.querySelector('#n3');
let n4 = document.querySelector('#n4');
let n5 = document.querySelector('#n5');
let n6 = document.querySelector('#n6');
let n7 = document.querySelector('#n7');
let n8 = document.querySelector('#n8');


function xCalcular() {
        let x1 = (- Number(bx.value) + Math.sqrt(Number(dx.value))) / (2 * Number(ax.value));
        let x2 = (- Number(bx.value) - Math.sqrt(Number(dx.value))) / (2 * Number(ax.value));
        if(Number(dx.value) < 0 ) {
                x1 = "Sem Raiz Real"
                x2 = "Sem Raiz Real"
        }
        document.querySelector('#telaX1').innerHTML= `<div><span class="tlX"> ${x1} </span></div>`
        document.querySelector('#telaX2').innerHTML= `<div><span class="tlX"> ${x2} </span></div>`
}

function deltaCalcular() {
        let delta = (Number(b.value) *  Number(b.value)) - 4 * (Number(a.value) * Number(c.value));
        document.querySelector('#telaDelta').innerHTML= `<div>&Delta; = ${delta}</div>`
}

function somar() {
        let r = Number(n1.value) + Number(n2.value);
        document.querySelector('#tela').innerHTML= `<div><span class="tl">${r}</span></div>`
}

function subtrair() {
        let r2 = Number(n3.value) - Number(n4.value);
        document.querySelector('#tela2').innerHTML= `<div><span class="tl">${r2}</span></div>`
}

function multiplicar() {
        let r3 = Number(n5.value) * Number(n6.value);
        document.querySelector('#tela3').innerHTML= `<div> <span class="tl">${r3}</span></div>`
}

function dividir() {
        let r4 = Number(n7.value) / Number(n8.value);
        if(r4 > 0) {
                document.querySelector('#tela4').innerHTML= `<div><span class="tl">${r4}</span></div>`
        } else {
                document.querySelector('#tela4').innerHTML= `<div> <span class="tl">0</span></div>`
        }     
}



