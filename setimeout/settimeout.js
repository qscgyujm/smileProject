// setTimeout(frog, 1000)
// function frog () {
//     console.log('test');
//     setTimeout(frog, 2000)
// }
setTimeout( pupOut, 1000)
function pupOut () {
  console.log('time')
  setTimeout( pupOut, 1000)
}

// setTimeout( function frog(){
//   console.log('呱')
//   setTimeout( frog, 2000 );
// }, 2000 );