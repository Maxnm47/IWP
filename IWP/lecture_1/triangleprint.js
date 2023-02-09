//for (let i = 1; i <= 7; i++) {
//    console.log("#".repeat(i));
//  }

for (let i = 1; i <= 7; i++) {
    let row = '';
for (let j = 0; j < i; j++) {
    row += '#';
}
    console.log(row);
}
//output  
//#
//##
//###
//####
//#####
//######
//#######

let n = 5;
// External loop
for (let i = 0; i < n; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    process.stdout.write(' ')
  }
  // printing star
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    process.stdout.write('*')
  }
  console.log();
}

//output
//*********
// *******
//  *****
//   ***
//    *



for(let i = 5; i >= 1; --i){
    let pyramid = "* ".repeat(i)
    console.log(pyramid)

}


//output:
//* * * * *
//* * * *
//* * *
//* *
//*
//


for(let i=0; i<=6; i++){
    let star = '* '.repeat(6-i)
    let space = "  ".repeat(i)
    console.log(space+star)
}
//output:
//* * * * * *
//  * * * * *
//    * * * *
//      * * *
//        * *
//          *

