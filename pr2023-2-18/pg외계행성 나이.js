function solution(age) {
    var answer = '';
    let alpha = ["a", "b", "c", "d", "e", "f" ,"g", "h", "i", "j"];
    let Num = (age + "").split("");
    
    for (let i =0 ; i <= Num.length -1 ; i++){
        let Num2 = Number(Num[i])
        answer += alpha[Num2];
    }
    return answer;
}

console.log(solution(27));   // ch