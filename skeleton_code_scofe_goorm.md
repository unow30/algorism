```js

const readline = require('readline');
//여기서 솔루션 코드를 처음부터 작성한다. return이 아닌 console.log()로 출력하는거 같다.
const solution = (word) => { console.log(word) }

(async () => {
    let rl = readline.createInterface({ input: process.stdin });//입출력 프로세스 로딩

    //필요에 따라 변수를 작성한다.
    let word = ""
    for await (const line of rl) {//입력값 \n로 구분하여 line으로 저장
        console.log('Hello Goorm! Your input is', line);
        word = line
        rl.close();//process exit() 실행. 입출력 프로세스 종료
    }

    //솔루션 코드를 실행한다.
    solution(word)
    process.exit();//직접 입력 후 엔터를 치면 입력 프로세스가 종료된다.
})();
```