'use strict';
var rightAnswers = 0;

var questions = ['Is Green my favorite Color?',
  'Which one do you think I love more, Pizza or Burgers?',
  'I was born in January but my Passport says April! Truth or Lie? Hint: Don\'t be fooled by April Fools\' Day',
  'Two years ago, I had a Nissan but I drove Audi.',
  'Do you think I\'m a Dog person?',
  'How many countries have I visited before the age of 25? You have 4 tries',
  'Can you guess a state that I have visited besides Washington?'];

var countriesArray = ['Malaysia', ' Singapore', ' Turkey', ' UAE', ' Lebanon', ' Egypt', ' Syria', ' Jordan',' Germany', ' USA'];

var answer1 = ['Sure! I am a Ninja Turtle. :-)', 'Wrong Answer. My favorite color is Green because I am a Ninja Turtle.'];
var answer2 = ['Right, that\'s obvious, all Ninja Turtles love Pizza. :P', 'Nope, Ninja Turtles don\'t eat Burgers.'];
var answer3 = ['Right, and I can\'t change it because my national ID was updated to the wrong one as well! SMH, Embassy Mistakes.', 'Well, I am afraid you are wrong. Our embassy makes awful mistakes.'];
var answer4 = ['You are right! My old Boss has an A4 Audi that he doesn\'t like. He did let me drive it for 6 months for free', 'I know it sounds hard to believe but my old Boss has an A4 Audi that he doesn\'t like. He did let me drive it for 6 months for free'];
var answer5 = ['YES! I love Dogs! I had Alaskan Husky back home and never was able to walk him outside the house because of the Hot Weather.', 'Incorrect. I love Dogs. I had Alaskan Husky back home and never was able to walk him outside the house because of the Hot Weather.'];
var answer6 = ['Too High! try again.', 'Too Low! try again!', 'So Close! Try again!', 'Good Guess! I have visited 10 countries excluding my home country.'];
var answer7 = ['New York', 'Oregon'];

var tryAgain = 'Enter a new number. Attempts left: ';
var possibleAnswers = ['YES','PIZZA','YES','YES','YES'];
var userAnswer = new Array();

//Document.Write Arrays
var answerForDocument1 = new Array();
var answerForDocument2 = new Array();
var answerForDocument3 = new Array();
var answerForDocument4 = new Array();
var answerForDocument5 = new Array();
var answerForDocument6 = new Array();

//Game Start Function
function start() {
  var player = prompt('Welcome to my mini Game! Please Enter Your Name to Continue...');
  if (player){
    alert('Hello' + ' ' + player + '! My name is Luay, I will ask you some random questions about myself. If you get all of them correct, you will receive a gift from me ;-)');
  }
  return player;
}

//Question 1
function questionOne() {
  userAnswer[0] = prompt(questions[0]).toUpperCase();
  if (userAnswer[0] === possibleAnswers[0]) {
    alert(answer1[0]);
    answerForDocument1 = answer1[0];
    rightAnswers++;
  } else {
    alert(answer1[1]);
    answerForDocument1 = answer1[1];
  };
  document.write('<p>' + 'Q: ' + questions[0] + ' ' + userAnswer[0] + ' ' + '|' + ' ' + 'A:' + ' ' + answerForDocument1 + '</p>');
  return rightAnswers;
}

//Question 2
function questionTwo(){
  userAnswer[1] = prompt(questions[1]).toUpperCase();
  if (userAnswer[1] === possibleAnswers[1]) {
    alert(answer2[0]);
    answerForDocument2 = answer2[0];
    rightAnswers++;
  } else {
    alert(answer2[1]);
    answerForDocument2 = answer2[1];
  }
  document.write('<p>' + 'Q: ' + questions[1] + ' ' + userAnswer[1] + ' ' + '|' + ' ' + 'A:' + ' ' + answerForDocument2 + '</p>');
  return rightAnswers;
}

//Question 3
function questionThree(){
  userAnswer[2] = prompt(questions[2]).toUpperCase();
  if (userAnswer[2] === possibleAnswers[2]) {
    alert(answer3[0]);
    answerForDocument3 = answer3[0];
    rightAnswers++;
  } else {
    alert(answer3[1]);
    answerForDocument3 = answer3[1];
  }
  document.write('<p>' + 'Q: ' + questions[2] + ' ' + answer3 + ' ' + '|' + ' ' + 'A:' + ' ' + answerForDocument3 + '</p>');
  return rightAnswers;
}

//Question 4
function questionFour(){
  userAnswer[3] = prompt(questions[3]).toUpperCase();
  if (userAnswer[3] === possibleAnswers[3]){
    alert(answer4[0]);
    answerForDocument4 = answer4[0];
    rightAnswers++;
  } else {
    alert(answer5[0]);
    answerForDocument4 = answer5[0];
  }
  document.write('<p>' + 'Q: ' + questions[3] + ' ' + userAnswer[3] + ' ' + '|' + ' ' + 'A:' + ' ' + answerForDocument4 + '</p>');
  return rightAnswers;
}

//Question 5
function questionFive(){
  userAnswer[4] = prompt(questions[4]).toUpperCase();
  if (userAnswer[4] === possibleAnswers[4]){
    alert(answer5[0]);
    answerForDocument5 = answer5[0];
    rightAnswers++;
  } else {
    alert(answer5[1]);
    answerForDocument5 = answer5[1];
  }
  document.write('<p>' + 'Q: ' + questions[4] + ' ' + userAnswer[4] + ' ' + '|' + ' ' + 'A:' + ' ' + answerForDocument5 + '</p>');
  return rightAnswers;
}

//Question 6
function questionSix() {
  var counter = 0;
  var attempts = 3;
  userAnswer[5] = prompt(questions[5]);
  counter++;
  for (var i = 0 ; i < 3 ; i++){
    if (userAnswer[5] > 12){
      alert(answer6[0]);
      answerForDocument6 = answer6[0];
      userAnswer[5] = prompt(tryAgain + attempts);
      counter++;
      attempts--;
    } else if (userAnswer[5] < 8){
      alert(answer6[1]);
      answerForDocument6 = answer6[1];
      userAnswer[5] = prompt(tryAgain + attempts);
      counter++;
      attempts--;
    } else if (userAnswer[5] == 8 || userAnswer[5] == 9 || userAnswer[5] == 11 || userAnswer[5] == 12){
      alert(answer6[2]);
      answerForDocument6 = answer6[2];
      userAnswer[5] = prompt(tryAgain + attempts);
      counter++;
      attempts--;
    } else if (userAnswer[5] == 10) {
      rightAnswers++;
      break;
    }
  }
  if (userAnswer[5] == 10){
    alert('Good Guess! I have visited 10 countries excluding my home country.' + ' ' + countriesArray + '.');
    answerForDocument6 = 'Good Guess! I have visited 10 countries excluding my home country.';
  }
  if (attempts == 0) {
    alert('Sorry, ' + player + '! you have used all your tries. I have visited 10 countries.');
  }
  document.write('<p>' + 'Q: ' + questions[5] + 'No. of attempts used:' + ' ' + counter + '.' + ' ' + 'A:' + ' ' + answerForDocument6 + ' ' + '|' + ' ' + countriesArray[0] + countriesArray[1] + countriesArray[2] + countriesArray[3] + ',' );
  return rightAnswers;
}

// Question 7
function questionSix() {
  var counter = 0;
  var attempts = 5;
  userAnswer[6] = prompt(questions[5]);
  counter++;
  for (var i = 0 ; i < 3 ; i++){
    if (userAnswer[6] > 12){
      alert(answer6[0]);
      answerForDocument7 = answer6[0];
      userAnswer[6] = prompt(tryAgain + attempts);
      counter++;
      attempts--;
    }
  }
  if (userAnswer[6] == 10){
    alert('Good Guess! I have visited 10 countries excluding my home country.' + ' ' + countriesArray + '.');
    answerForDocument7 = 'Good Guess! I have visited 10 countries excluding my home country.';
  }
  if (attempts == 0) {
    alert('Sorry, ' + player + '! you have guessed wrong. The states I visited were ' + answer7[0] + ' and ' + answer7[1] + '.');
  }
  alert('Thank you for playing this game! :-)');

  // document.write('<p>' + 'Q: ' + questions[6] + 'No. of attempts used:' + ' ' + counter + '.' + ' ' + 'A:' + ' ' + answerForDocument7 + ' ' + '|' + ' ' + countriesArray + '.' + '</p>');
  return rightAnswers;
}

var player = start();
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

document.write('<p>' + 'Thank you' + ' ' + player + ', you have answered ' + rightAnswers + ' out of 7 questions correctly! Please, visit us later for more games!' + '</p>');
