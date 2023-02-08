// 중첩 if문과 while문, 최대공약수를 활용하여 풀어낸다.

function soultion(numer1, denom1, numer2, denom2){

    var numer = numer1 * denom2 + numer2 * denom1;
    var denom = denom1 * denom2;

    var minNum;  // 최대공약수 찾기
    if(numer > denom){
        denom = minNum;
    } else {
        numer = minNum;
    }

    while(true){
    if(denom % minNum === 0){  // if문 중첩
        if(numer % minNum ===0){
            return [numer/minNum, denom/minNum];
        }
    }
    minNum = minNum - 1;
}

}

