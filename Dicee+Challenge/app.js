//변수를 선언
var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');
var h1 = document.querySelector('h1');

//랜덤 숫자 2개 생성
var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;

img1.setAttribute('src','images/dice' + random1 + '.png');
img2.setAttribute('src','images/dice' + random2 + '.png');

if(random1 > random2){
    h1.textContent = "🚀Player 1 Wins!";
}
else if(random2 > random1){
    h1.textContent = "Player 2 Wins!🚀";
}
else {
    h1.textContent = "Draw!";
}