/*
s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
*/

function solution(s){
    let answer;
    let Pcount = 0;
    let Ycount = 0;
    let STR = [...s.toLowerCase()];
    for (let i = 0; i <= STR.length - 1; i++) {
        if (STR[i] === "p") {
            Pcount += 1
        } else if (STR[i] === "y") {
            Ycount += 1
        }
    }
    answer = Pcount === Ycount ? true : false
    return answer;
}

console.log(solution("PPYYuuuuss")) // true

// 초 간단식

function solution2(s) {
    return s.toLowerCase().split("p").length === s.toLowerCase().split("y").length ? true : false // split()으로 해당 문자만 ""으로 만들고 개수 구함
}

console.log(solution2("PYYooo"))  // false