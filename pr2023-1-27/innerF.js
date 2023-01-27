// 중첩 함수 : 함수 내에 정의된 함수

function outer(){
    var x = 1;

    function inner(){  
        var y = 2;
        console.log(x + y);
    }

    inner();
}

outer();