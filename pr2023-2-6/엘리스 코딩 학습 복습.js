
// 문자열 거꾸로 생성하기

function reverse(str){
    var reverS = "";
    for( var i = str.length -1; i >= 0; i--){ // 논리 파악할 것
        reverS = reverS + str.charAt(i);
    }
    return reverS;
} 

console.log(reverse("hug"));