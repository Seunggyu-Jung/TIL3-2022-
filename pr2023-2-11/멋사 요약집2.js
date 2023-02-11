// class : 붕어빵 틀 => 같은 작업을 할 변수를 여러개 찍어냄

class Human {
    attack(){
        console.log("공격!");
    };

    defense(){
        console.log("방어!");
    }

}

let Thoven = new Human;

Thoven.attack();  // 공격!
Thoven.defense();  // 방어!

let Slaim = new Human;

Slaim.attack();  // 공격!
Slaim.defense();  // 방어!


// 클레스 상속 : 상속받게 되면 상속받은 명령을 수행할 수 있음

class EliteHuman extends Human {
    magic() {
        console.log('Lighting!');
    }
}

let 현자 = new EliteHuman;

현자.magic(); // Lighting!

현자.attack();  // Human의 인자를 상속받음, 공격!

// 전개 구문: 여러개의 인자값을 처리할 때 사용

let arr1 = [1, 2, 3, 4];
let arr2 = [10, 20, 30, 40];
let arr3 = [100, ...arr1, 200, ...arr2, 300]
let arr4 = [100, arr1, 200, arr2, 300]

console.log(arr3); // [100,  1,  2,  3,  4, 200, 10, 20, 30, 40, 300] , 풀어서 나옴
console.log(arr4);  // [ 100, [ 1, 2, 3, 4 ], 200, [ 10, 20, 30, 40 ], 300 ] , 묶여서 나옴

console.log(Math.max(...arr3)); 300

let [a, b, c, ...d] = [10, 20, 30, 40, 50, 60, 70];

console.log(d);  // [ 40, 50, 60, 70 ], 나머지가 d로 들어감