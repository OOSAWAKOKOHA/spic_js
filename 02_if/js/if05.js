let psNo = prompt( "Photoshopの点数は?" );
psNo = Number( psNo );

let aiNo = prompt( "Illustratoの点数は?" );
aiNo = Number( aiNo );

let ave = ( psNo + aiNo ) / 2;

console.log
( `Photoshopは ${ psNo } 点ね、Illustratorは ${ aiNo } 点ね、平均 ${ ave } 点` );

if ( ave < 0 || ave > 100 ) {
  console.log( "嘘つくんじゃない" );
}
else if ( ave >= 0 && ave <= 30 ) {
console.log( "がんばりなさい" );
}
else if ( ave >= 31 && ave <= 60 ) {
  console.log( "まずまずね" );
}
else {
  console.log( "頑張ったね" );
}