// Code your solutions in this file

function writeCards(names, surprise){
    let messages = []
    for (let i=0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${surprise} gift!` ;
      messages.push(message);
    }
return messages;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], 'surprise'));

function countDown() {
let countdown=10;
while (countdown >= 0
    ) {
    console.log(countdown--);
}

}