var body = document.getElementById('gradient');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var h3 = document.querySelector('h3');

function setGradient(){
    let c1 = color1.value;
    let c2 = color2.value;
    body.style.background = 'linear-gradient(45deg, ' + c1 + ', ' + c2 + ')';
    h3.textContent = body.style.background + ";";
}

//컬러입력창을 클릭해서 색깔을 바꿨을때! => 이벤트 발생
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

