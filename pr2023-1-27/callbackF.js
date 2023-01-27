// 콜백 함수 : 함수의 '매개변수'를 통해 다른 함수의 내부로 전달되는 함수
// 고차 함수 : 매개변수를 통해, 콜백함수를 호출하는 함수
// 외부에서 받은 f를 n번만큼 반복 호출

function repeat(n, f){ 
   for (var i = 0; i < n; i++){
    f (i); // i를 전달하면서 f를 호출
   }
}

//0~4까지 숫자 나열

var logAll = function (i) { 
    console.log(i);
}

repeat(5, logAll);

//0~4까지 홀수 나열

var logOdds = function (i){
    if(i % 2) console.log(i);
};

repeat(5, logOdds);

// 콜백 함수(익명 함수)를 사용하는 고차함수 map

var res = [1, 2, 3].map(function (item){
    return item * 2;
});

console.log(res);

// 콜백 함수(익명 함수)를 사용하는 고차함수 filter

var res = [1, 2, 3].filter(function(item){
    return item % 2;
});

console.log(res);