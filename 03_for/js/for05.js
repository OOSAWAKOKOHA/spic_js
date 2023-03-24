let num = prompt();
num = Number( num );

// let i;
if ( num >= 1 && num <= 50 ){
  for ( let i = 0; i < num; i++ ) { 
    console.log( ` ${ i + 1  }回目 ` );
  }
}
else{ 
  console.log( ' 1から50の数値を入れてください ' );
}

