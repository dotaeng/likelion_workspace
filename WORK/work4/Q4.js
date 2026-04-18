let product = window.prompt(
    '구매할 상품을 입력하시오. cola는 2천원, beer는 4천원, milk는 3천원, coffee는 천원입니다.'
);

switch(product){
    case 'cola':
        price=2000;
    case 'beer':
        price=4000;
    case 'milk':
        price=3000;
    case 'coffee':
        price=1000;
    
    console.log(`${product}는 ${price}원입니다.`);
    break;
    default:
        console.log(`${product}는 팔지 않습니다.`);
}