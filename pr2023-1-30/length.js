// length프로퍼티는 함수의 매개변수 개수를 나타냄
// arguments 객체의 length 프로퍼티는 인자(arguments)의 개수를 나타냄

//0개
function maple(){    }
console.log(maple.length);

// 1개
function story(x){
    return x;
}
console.log(story.length);


// 2개
function col(x, y){
    return x * y;
}

console.log(col.length);
