const characters = ['|   ', '/   ', '-   ', '\\   '];
let timer = 0;
for (let i = 0; i <= 20; i++){
  setTimeout(() => process.stdout.write(`\r${characters[i % 4]}`), timer)
  timer += 200;
}
// characters.forEach(characeter => {
//   setTimeout(() => process.stdout.write(`\r${characeter}`), timer)
//   timer -= 200;
// });
// setTimeout(() => {process.stdout.write("\n")}, );
