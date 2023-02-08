/* Array.map() : 배열의 인수들에 변화를 주는 메서드

 2배의 값을 만들 경우

 Array.map(number => number * 2);

 Array.map(function(number){
	return number * 2;
	});
*/

function soultion(numbers){
    var answer = numbers.map(number => number * 2); // map 메서드 사용

    return answer;
}


console.log(soultion([2,3,4,5]));



