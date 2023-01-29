// new연산자와 함께 함수를 호출하면 일반 함수가 생성자 함수로 동작한다

//객체를 반환하지 않는 일반 함수
function add(x ,y){
    return x + y;

}

let inst = new add();

// 함수가 객체를 반환하지 않았기 때문에 빈 객체가 형성
console.log(inst);


// 객체를 반환하는 일반 함수
function createUser(name, role){
    return { name, role};
}


inst = new createUser('Jung', 'admin');

// 함수가 생성한 객체를 반환
console.log(inst);