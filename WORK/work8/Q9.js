/* Object 를 이용해서 물건의 이름과 가격을 5개 입력하고,  for 문을 이용해서 가격이 가장 비싼 물건의 이름과 가격을 출력하시오. */

let items = [
    {name: "apple", price: 1000},
    {name: "banana", price: 500},
    {name: "orange", price: 300},
    {name: "grape", price: 200},
    {name: "melon", price: 400}
];

let maxprice = items[0].price;
let maxname = items[0].name;

for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item.price > maxprice) {
      maxprice = item.price;
      maxname = item.name;
    }
  }

console.log(`가장 비싼 물건은 ${maxname}이고 가격은 ${maxprice}입니다.`);