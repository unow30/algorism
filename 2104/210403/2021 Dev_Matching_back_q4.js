/*
 서브쿼리 문제였다. HOST_ID가 2개 이상인 유저의 정보를 모두 가져오는 것이었다.
 COUNT(HOST_ID) > 1로 2개 이상의 HOST_ID를 찾아올 수는 있었는데 정답에서 요구한 대로
 모든 데이터를 불러올 수 없었다.

 - SELCET * FROM PLACES WHERE HOST_ID > 1 -> HOST_ID 개수가 2 이상이어야 하는데
 이렇게 표시하면 개수를 알 수가 없다.

 - SELECT COUNT(HOST_ID) FROM PLACES GROUP BY HOST_ID로 HOST_ID의 개수를 셀 수 있었다.
 |COUNT(HOST_ID)|
 |--------------|
 |3             |
 |2             |
 |1             |

 - SELECT COUNT(HOST_ID) FROM PLACES GROUP BY HOST_ID HAVING COUNT(HOST_ID) > 1 ORDER BY ID*1
 이걸로 COUNT(HOST_ID)가 2 이상이고 ID순으로 오름차순된 데이터를 불러올 수 있었다.

 - HOST_ID가 주가 아니라 PLACES의 정보가 모두 나와야 하며, 이 때 HOST_ID가 2개 이상일 때,
 그 HOST_ID가 등록한 PLACES를 모두 표시해야 한다.

 -SELECT HOST_ID FROM PLACES GROUP BY HOST_ID HAVING COUNT(HOST_ID) > 1이라면
 다음과 같이 나올 것이다.
 |HOST_ID|
 |-------|
 |760849 |
 |30900122|
 - 이 값을 서브쿼리로 활용한다면? WHERE HOST_ID IN (SELECT HOST_ID FROM PLACES GROUP BY HOST_ID HAVING COUNT(HOST_ID) > 1)
 서브쿼리에 있는 칼럼 값이 IN에 맞물려서 WHERE 조건의 데이터를 불러오지 않을까?




 풀이: COUNT(HOST_ID)>1인 HOTS_ID, COUNT(HOST_ID) 칼럼을 갖는 테이블을 서브쿼리로 생성한 다음
 PLACES 테이블과 조인하면 된다.
*/