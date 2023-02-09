// slice(0 , 7) 에서 뒤의 숫자 전까지 가져온다.

let x = "Hello World!";
console.log(x.slice(0, 7)); // 7번째가 o이기에  그 바로 앞인 W 까지 나옴

// 정규표현식 / /g : / /g 를 모두 replace한다.

x = "Hello World Hello";
console.log(x.replace(/Hello/g, "Hi")); // 표기법 제대로 암기 할것

// Boolean 값 응용

!![] // true
!!'' // false
!!{} // true
!!0 // false

// forEach 메서드: 순회하는 함수

let arr = [10 , 20 , 30];
console.log(arr.forEach(x => x**2));  // 배열을 순회하며 해당 명령을 실행

// filter 메서드 : 조건에 true인 값을 가져오는 함수

console.log(arr.filter(x => x >4)); // 여기서 x는 임의의 함수

// find 메서드 : 조건에 맞는 값 1개만 가져올때 사용

console.log(arr.find(x => x >4));


// 나열된 배열을 만드는 법

//Array(n).fill(0).map((values,index) => values + index); // 콘솔창에서만 실행 가능

//  Object.keys, Object.values, Object.entries

let object = { "a":100 , "b":200, "c":300};
console.log(Object.keys(object)); // key값 호출
console.log(Object.values(object)); // value값 호출
console.log(Object.entries(object)); // 객체 전체 호출

// Map 메서드 : 비교적 간단하게 객체를 생성

let map = new Map()

map.set("a",100); //으로 key 와 value를 결정
map.set("b",200);
map.set("c",300);
map.set("d",400);


console.log(map.get("a"))// key값을 입력하여 value 값 출력

// Set : object 중복을 허락하지 않는 메서드

let set = new Set('11111111122222222233333333');
console.log(set); // Set(3) { '1', '2', '3' }

set.add(4); // add 메서드로 인자 추가
set.add(5);
console.log(set); // Set(5) { '1', '2', '3', 4, 5 } 

console.log(set.size); // 5 size 메서드로 크기 측정

// 오늘 요일 출력 : new Date().getDay()
console.log(new Date().getDay()); // 

// 구구단 생성(중첩 for을 이용)
for (var i = 1 ; i < 10 ; i++){
    for (var j = 1 ; j < 10 ; j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
}

// 모든 자릿수의 합 문제(for of를 활용)

let a = '185486';
let s = 0;
for (let i of a){  // for of 활용
    s += parseInt(i); // 정수로 전환
}

console.log(s);

