// prototype 프로퍼티는 생성자 함수로 호출할 수 있는 객체(constructor)만 소유할 수 있는 프로퍼티


// true
(function() {}).hasOwnProperty('prototype');

// false
({}).hasOwnProperty('prototype');