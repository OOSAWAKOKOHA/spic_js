//残金
let wallet = 12800;
//価格
let price = 980;

console.log( parseInt(wallet/price) );

let total = parseInt(wallet/price);

let num = 0;

for ( let i = 0; i < 20; i++ ) {
  if ( i == 4 ) {
    price = 750;
    console.log("値引きした");
  }
  if ( wallet > price ) {
    wallet = wallet - price;
    console.log( ` ${ i + 1 } 回目の買い物成功。残金は${ wallet }` );
    num++;
    console.log( ` 購入した回数${ num }回 ` );
  }
  else{
    console.log( ` 買い物終了${ num }個買えた ` );
    break;
  }
}




// console.log( ` ${ i + 1 } 回目の買い物成功。残金は${ wallet - price * ( i + 1 ) }円 ` );
// for ( let i = 4; i < 20; i++ ) {
//   console.log( ` ${ i + 1 } 回目の買い物成功。残金は${ wallet - priceSe * ( i + 1 ) }円 ` );
//   console.log(wallet);
// }