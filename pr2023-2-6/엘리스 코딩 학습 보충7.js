// 새로운 문자열 데이터 추가하는 법

function solution(s){
    var answer = "";
    var ans = s.split("");
    for (var i = 0; i <= ans.length - 1 ; i++){
        
        if(ans[i] == " "){
            answer += "링디기디기\n"; // += 를 이용함
        } else if (ans[i] == ".") {
            answer += "딩딩딩\n";
        } else {
            answer += "링딩동 "; // 변수 = 변수 + 새로운 문자열, 도 가능하지만 첫 데이터가 undefined가 나올 수 있음
        }
    }
    
    return answer;
}

console.log(solution("나는 배짱이."));

