var readlineSync = require('readline-sync');
var answer = readlineSync.question('What is your name? :');
console.log("welcome " + answer + " do you know purva? ");
var answer1 = readlineSync.question("where do i live?");
var score = 0;
if (answer1 === "Bhavnagar") {
  console.log("right");
  score += 1;
}
else {
  console.log("wrong");
  score -= 1;
}
console.log("your score is" + score);


var answer2 = readlineSync.question("who is my favorite super would be?");
if (answer2 === "Batman") {
  console.log("right");
  score += 1;
}
else {
  console.log("wrong");
  score -= 1;
}
console.log("your score is" + score);


var answer4 = readlineSync.question("where do i study?");
if (answer4 === "Gec Bhavnagar") {
  console.log("right"); NDJSN
  score += 1;
}
else {
  console.log("wrong");
  score -= 1;
}
console.log("your score is" + score);
console.log("YAY, your score is" + score);
console.log('check out the score if you should  be there then ping me');
console.log("highscores:");
var highScores = [{
  name: "Esha",
  score: 3,
}]

highScores.map(score => console.log(score.name, " : ", score.score))


