//test codesendbox

//메인 카테고리 입력    서브 카테고리 입력
//컬러              빨강 노랑 블랙 화이트
//크기              스몰 미디움 라지
//선택              쇼핑백 추가, 선물상자 추가
// 조합 버튼 클릭
let obj = {
  main_category: ["컬러", "크기", "선택"],
  sub_category: {
    option1: ["빨강", "노랑", "블랙", "화이트"],
    option2: ["스몰", "미디움", "라지"],
    option3: ["쇼핑백 추가", "선물상자 추가"]
  }
};

let main_a = "컬러";
let main_b = "크기";
let main_c = "선택";

let sub_a = "  빨강,   노랑,   블랙, 화이트   ";
let sub_b = "   스몰,  미디움, 라지   ";
let sub_c = "쇼핑백 추가, 선물상자 추가";

//양쪽공백 제거
sub_a = sub_a.replace(/(^\s*)|(\s*$)/g, "");
//중간공백 제거
sub_a = sub_a.replace(/, */g, ",").split(",");

//양쪽공백 제거
sub_b = sub_b.replace(/(^\s*)|(\s*$)/g, "");
//중간공백 제거
sub_b = sub_b.replace(/, */g, ",").split(",");

//양쪽공백 제거
sub_c = sub_c.replace(/(^\s*)|(\s*$)/g, "");
//중간공백 제거
sub_c = sub_c.replace(/, */g, ",").split(",");
console.log(main_a);
console.log(main_b);
console.log(main_c);
console.log(sub_a);
console.log(sub_b);
console.log(sub_c);
