const menuList = ("americano" = 3.0, "latte" = 4.0, "milkCake" = 3.5, "vanillaLatte" = 4.2, "mintChocolate" = 4.6, "chocoCake" = 4.4);

let total = 0;
while(true){
    let menu = prompt("무엇을 주문하시겠습니까?");
    if(menu == 0){
        break;
    } else {
        total += menuList[menu];
    }
    console.log(total);
}