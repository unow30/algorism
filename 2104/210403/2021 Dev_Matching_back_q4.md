## 헤비 유저 찾기

## 문제
>PLACES 테이블은 공간 임대 서비스에 등록된 공간의 정보를 담은 테이블입니다. PLACES 테이블의 구조는 다음과 같으며 ID, NAME, HOST_ID는 각각 공간의 아이디, 이름, 공간을 소유한 유저의 아이디를 나타냅니다. ID는 기본키입니다.
>
| NAME    | TYPE    |
| ------- | ------- |
| ID      | INT     |
| NAME    | VARCHAR |
| HOST_ID | INT     |
>
이 서비스에서는 공간을 둘 이상 등록한 사람을 "헤비 유저"라고 부릅니다. 헤비 유저가 등록한 공간의 정보를 아이디 순으로 조회하는 SQL문을 작성해주세요.

## 예시
예를 들어, PLACES 테이블이 다음과 같다면

| ID       | NAME                                            | HOST_ID  |
| -------- | ----------------------------------------------- | -------- |
| 4431977  | BOUTIQUE STAYS - Somerset Terrace, Pet Friendly | 760849   |
| 5194998  | BOUTIQUE STAYS - Elwood Beaches 3, Pet Friendly | 760849   |
| 16045624 | Urban Jungle in the Heart of Melbourne          | 30900122 |
| 17810814 | Stylish Bayside Retreat with a Luscious Garden  | 760849   |
| 22740286 | FREE PARKING - The Velvet Lux in Melbourne CBD  | 30900122 |
| 22868779 | ★ Fresh Fitzroy Pad with City Views! ★          | 21058208 |
>
760849번 유저는 공간을 3개 등록했으므로 이 유저는 헤비유저입니다.
30900122번 유저는 공간을 2개 등록했으므로 이 유저는 헤비유저입니다.
21058208번 유저는 공간을 1개 등록했으므로 이 유저는 헤비유저가 아닙니다.
따라서 SQL 문을 실행하면 다음과 같이 나와야 합니다.
>
| ID       | NAME                                            | HOST_ID  |
| -------- | ----------------------------------------------- | -------- |
| 4431977  | BOUTIQUE STAYS - Somerset Terrace, Pet Friendly | 760849   |
| 5194998  | BOUTIQUE STAYS - Elwood Beaches 3, Pet Friendly | 760849   |
| 16045624 | Urban Jungle in the Heart of Melbourne          | 30900122 |
| 17810814 | Stylish Bayside Retreat with a Luscious Garden  | 760849   |
| 22740286 | FREE PARKING - The Velvet Lux in Melbourne CBD  | 30900122 |



## 풀이
> COUNT(HOST_ID)>1인 HOTS_ID, COUNT(HOST_ID) 칼럼을 갖는 테이블을 서브쿼리로 생성한 다음
 PLACES 테이블과 조인하면 된다.

1. SELECT * FROM PLACES;

>![](https://images.velog.io/images/unow30/post/f5bf7df9-d234-4a5e-8cae-15a98d313857/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202021-04-04%20144916.png)
 
2. 테이블에서 HOST_ID, COUNT(HOST_ID) 열을 SELECT하는데, HOST_ID별로 GROUP BY한 다음 COUNT(HOST_ID) > 1 이상인 데이터만 불러온다.

>![](https://images.velog.io/images/unow30/post/a3a583b4-c661-4922-af80-cf239dc58519/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202021-04-04%20150342.png)

3. 위에서 불러온 테이블을 PLACES 테이블과 INNER JOIN한다.

>![](https://images.velog.io/images/unow30/post/118b895c-9d1d-4469-ac0c-9d0f9f2599da/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202021-04-04%20150423.png)
 
