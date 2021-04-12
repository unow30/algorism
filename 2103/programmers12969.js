/*
## 직사각형 별찍기

### 문제 설명
  > 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

  ### 제한사항
  >n과 m은 각각 1000 이하인 자연수입니다.

  
  ### 입출력 예
 입력 5 3,
 출력 
 *****
 *****
 *****
*/
process.stdin.setEncoding('utf8');//utf8형식의 입력 인코딩
process.stdin.on('data', data => {//data 이벤트?
    const n = data.split(" ");//n = ["5", "3"]
    const a = Number(n[0]), b = Number(n[1]);

    // let star = ''
    // for(let i = 0; i < b; i++){
    //     for(let j = 0; j < a; j++){
    //         star+="*";
    //     }
    //     star+="\n"
    // }
    // console.log(star)

    let star = `${"*".repeat(a)}\n`;
    console.log(star.repeat(b))

});