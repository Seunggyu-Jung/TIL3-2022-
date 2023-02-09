// sort() : 배열을 오름차순으로 정리하는 메서드

let maple = [10 , 30 ,1, 3, 4, 6, 5];

maple.sort(function(a,b){  // 숫자의 오름차순의 경우, 임의의 매개변수의 차를 이용해야 비교가 가능함
    return a- b;
})  

console.log(maple);