// 따옴표 출력하기 : \"를 사용하여 표현하고 싶은 따옴표를 사용

function solution() {
    
    return "\"It's all right.\"";
  }

console.log(solution());

// 반복 구구단 작성 : 중첩 반복문을 사용

for(var n = 2; n < 10; n++) {
    for(var i = 1; i < 10; i++){  // 반복문 중첩 사용
        var vol = n * i;
        console.log(n + " x " + i + " = " + vol);
    }
}