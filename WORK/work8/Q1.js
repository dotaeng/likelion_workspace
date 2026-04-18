/*Object를 이용해서 경기날짜&상대팀명&상대팀점수&두산팀점수를 저장하고,
prompt를 이용해 사용자가 날짜를 입력하면 [?월 ?일 ?대 ?으로 ?한테 (이겼다/졌다)]를 출 력하는 프로그램을 구현하시오.
(단,
Object의 들어가는 내용은 임의로 작성하시오.
승패는 두산팀을 기준으로 한다.
예> 5월 5일 두산팀 3 : 삼성팀 5 => 5월 5일 3대 5으로 삼성팀한테 졌다. 3- ?월 ?일의 범위는 5월 12일 ~ 16일까지다.
4- 5월 15일은 경기가 없는 날이다. */

let dusanGames = [
    {date: '5월 12일', opponent: 'LG', score: 2, opponentScore: 3,  result: '졌다' },
    {date: '5월 13일', opponent: '롯데', score: 1, opponentScore: 5,  result: '졌다' },
    {date: '5월 14일', opponent: '기아', score: 7, opponentScore: 2,  result: '이겼다' },
    {date: '5월 16일', opponent: '삼성', score: 6, opponentScore: 5,  result: '이겼다' },
];

alert("두산 경기 결과 확인하기");
let date = prompt('경기 날짜를 입력하세요 (5월 12일 ~ 5월 16일)');
let game = dusanGames.find((game) => game.date === date);

if (game) {
    console.log(`${game.date} ${game.score}대 ${game.opponentScore}로 ${game.opponent}팀한테 ${game.result}`);
} else {
    console.log('경기가 없는 날입니다');
}