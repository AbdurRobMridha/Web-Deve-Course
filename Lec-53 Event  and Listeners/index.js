

function changeText(){
let fpara= document.getElementById('fpara');
fpara.textContent="Hello Brother";
}

let fpara= document.getElementById('fpara');
fpara.addEventListener('click', changeText)
// fpara.removeEventListener('click', changeText);

