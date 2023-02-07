// 문자열을 숫자로 바꾸는 방법1

var str = "35";

var num = Number(str); // 문자열에 Number()함수를 입히고, 새로운 변수를 입력한다.

console.log(typeof num);
console.log(num);

// 문자열을 숫자로 바꾸는 방법2

var str2 = "40";

var num2 = parseInt(str2);  // 문자열을 정수화 시켜서 해결한다.

console.log(typeof num2);
console.log(num2);


// join 메서드
//  array.join()으로 사용하며, 배열을 메서드 안에서 요구하는대로 배치함

var fruit = ["banana", "apple", "grape", "Peach"];

var join1 = fruit.join("\n"); // 배열의 인수를 줄바꿈 처리

console.log(join1);
