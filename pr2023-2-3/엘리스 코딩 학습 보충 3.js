// 문자열 산술 연산자
console.log("20" + "10"); // 덧셈만 이어져서 나옴
console.log("20" - "10");
console.log("20" * "10");
console.log("20" / "10");

// 증감 연산자
var col = 10;

console.log(++col); // 1 증가 먼저 하고 변수 출력
console.log(--col); // 1 감소 먼저 하고 변수 출력
console.log(col++); // 변수 출력하고 변수에 1 더하기
console.log(col--); // 변수 출력하고 변수에 1 빼기
console.log(col);

// for 문 : for(초기화한 변수; 조건; 증감표시) {수행할 명령}

for (var i = 1 ; i < 10; i++ ) {
    console.log(i);
}

// while 문 : while(조건) {수행할 명령}

var n = 1; // 변수 초기화를 먼저 함
while(n < 10) {
    console.log(n);
    n++; // 증감 표시
}

// do while 문 : do {수행할 명령} while(조건); while의 조건에 관계없이 do의 명령을 무조건적으로 실행

var s = 12;

do { // 우선 실행
    console.log(s);
    s++;
} while(s < 10);
