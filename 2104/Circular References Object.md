# 환형 참조 객체(Circular References Object)

>프로퍼티 참조가 무한 순환되는 구조의 객체,
마지막 객체가 첫 번째 객체를 참조하는 등 순환 참조가 발생하여 결국 메모리 누수를 유발하는 객체. 

```js
let obj1 = {}
let obj2 = {a: 1, b: obj1}
obj1["circular"] = obj2
console.log(obj1)

{circular: {…}}
  circular:
   a: 1
   b:
    circular:
     a: 1
     b:
      circular:
       a: 1
       b:
        circular:
         a: 1
		 b:
		  circular: {a: 1, b: {…}}//무한반복
```
>위의 obj1은 JSON.stringify(obj1)으로도 변환이 안된다. JSON.stringify()는 인자가 undefined, 함수, 심벌 값이면 자동으로 누락시키며 이런 값들이 만약 배열에 포함되어있으면 null로 바꾸고, 객체 프로퍼티에 있으면 지워버리기까지 한다.

```js
//Song객체로 만든 두개의 인스턴스가 있다. first와 second가  환형 참조 객체 관계라면 isRepeatingPlaylist()를 true, 아니면 false를 출력해라
class Song {
  name;
  nextSong;
  
  constructor(name) {
    this.name = name;
  }
  
  /**
   * @return {boolean} true if the playlist is repeating, false if not.
   */
  isRepeatingPlaylist() {
    // Your code goes here
//    console.log(first.nextSong)
 //   console.log(second.nextSong)
//   console.log(Object.values(this))
 if(first.nextSong == second && second.nextSong == first){
   return true
 }
return false
}

let first = new Song("Hello");
let second = new Song("Eye of the tiger");

first.nextSong = second;
second.nextSong = first;

console.log(first.isRepeatingPlaylist());
```