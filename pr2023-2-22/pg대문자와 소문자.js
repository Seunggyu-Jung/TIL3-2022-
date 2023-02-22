/*
문자열 my_string이 매개변수로 주어질 때, 
대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(my_string) {
    var answer = "";
    let STR = my_string.split("");
    for (let Str of STR){
        if (Str === Str.toUpperCase()){  // 대문자로 변환: string.toUpperCase()
            answer += Str.toLowerCase()   // 소문자로 변환: string.toLowerCase()
        } else {
            answer += Str.toUpperCase();
        }
    }
    return answer;
}

console.log(solution("abCdEfghIJ")) //  ABcDeFGHij