// N줄 입력 받기 : 줄이 나뉘어 진 입력값을 한 배열에 넣고 싶은 경우
// 자바스크립트 기본 함수 split()을 이용하여 나눈다
function solution(input) {
    var answer;
    answer = input.split("\n");
    return answer;
  }

  console.log(solution(
    "elice\nrabbit\ncheshire\ndood\nhatter"));


// push : 배열에 새로운 데이터를 넣고 싶은 경우에 사용
// 배열.push();

// 함수안에 함수를 만들어 내부의 함수 결과를 return할 경우, 외부 return 값을 내부함수 명으로 한다.
// 단, 내부의 함수명을 호출할 경우, 소괄호를 작성하지 않고 입력해야함

function sol() {
  function add(x,y) {
      return x + y;
  };
  
  
  
return add; // 함수명만 호출
}



