//readline
/**
 * readline 모듈은 한 번에 한 줄씩 Readable 스트림 
 * (예 : process.stdin)에서 데이터를 읽기위한 인터페이스를 제공합니다. 
 * 비동기 처리를 하기 때문에 콜백함수를 활용한다.
 * 다음을 사용하여 액세스 할 수 있습니다.
 * https://nodejs.org/api/readline.html#readline_readline
 */
const readline = require('readline');

const rl = readline.createInterface({ //readline.Interface 클래스 생성
    input: process.stdin,//표준스트림 input(standard_input), 입력
    output: process.stdout// 표준스트림 output(standart_output), 출력
});

rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.close();// readline.Interface의 인스턴스의 input output 제어권 포기
});
/**
 * 이 코드가 호출되면
 * 인터페이스가 입력 스트림에서 데이터가 수신되기를 기다리기 때문에
 * readline.Interface가 닫힐 때까지 Node.js 애플리케이션이 종료되지 않습니다.
 * r1.close()로 닫는다.
 */