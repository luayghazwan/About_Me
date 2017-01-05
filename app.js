'use strict';

var player = prompt('Welcome to my mini Game! Please Enter Your Name to Continue...');
if (player)
  alert('Hello' + ' ' + player + '! My name is Luay, I will ask you some random questions about myself. If you get all of them correct, you will receive a gift from me ;-)');
var rightAnswers = 0;

//Question 1
var questionOne = prompt('What is my favorite Color?').toUpperCase();
if (questionOne === 'GREEN'){
  alert('Correct! I am a Ninja Turtle. :-)');
  var answer1 = 'Correct! I am a Ninja Turtle. :-)';
  rightAnswer++;
} else {
  alert('Wrong Answer. My favorite color is Green because I am a Ninja Turtle.');
  var answer1 = 'Wrong Answer. My favorite color is Green because I am a Ninja Turtle.';
};

//Question 2
var questionTwo = prompt('Which one do you think I love more, Pizza or Burgers?').toUpperCase();
if (questionTwo === 'PIZZA') {
  alert('Right, that\s obvious, all Ninja Turtles love Pizza.');
  var answer2 = 'Right, that\s obvious, all Ninja Turtles love Pizza.';
  rightAnswer++;
} else {
  alert('Sure! who doesn\'t!');
  var answer2 = 'Sure! who doesn\'t!';
}

//Question 3
var questionThree = prompt('I was born in January but my Passport says April! Truth or Lie?').toUpperCase();
if (questionThree === 'YES' || questionThree === 'Y' || questionThree === 'YEP' || questionThree === 'YEAH' || questionThree === 'TRUTH'){
  alert('Right, and I can\'t change it because my national ID was updated to that as well! SMH, Embassy Mistakes.');
  var answer3 = 'Right, and I can\'t change it because my ID was updated to that as well! Embassy Mistakes.';
  rightAnswer++;
} else {
  alert('Well, I am afraid you are wrong. Our embassy makes awful mistakes.');
  var answer3 = 'Well, I am afraid you are wrong. Our embassy makes awful mistakes.';
}

//Question 4
var questionFour = prompt('My best friend\'s name start with the letter Q').toUpperCase();
if (questionFour === 'YES' || questionFour === 'Y' || questionFour === 'YEP' || questionFour === 'YEAH'){
  alert('You are right! His name is Qusay.');
  var answer4 = 'You are right! His name is Qusay.';
  rightAnswer++;
} else {
  alert('False. My friend\'s name is Qusay.');
  var answer4 = 'False. My friend\'s name is Qusay.';
}

//Question 5
var questionFive = prompt('Do you think I\'m a Dog person?').toUpperCase();
if (questionFive === 'YES' || questionFive === 'Y' || questionFive === 'YEP' || questionFive === 'YEAH'){
  alert('YEP, but I love rabbits more.');
  var answer5 = 'YEP, but I love rabbits more.';
  rightAnswer++;
} else {
  alert('I\'m Sorry, but I love Dogs.');
  var answer5 = 'I\'m Sorry, but I love Dogs.';
}

//Question 6
var countriesArray = ['Malaysia', ' Singapore', ' Turkey', ' UAE', ' Lebanon', ' Egypt', ' Syria', ' Jordan',' Germany', ' USA'];
var counter = 0;
var questionSix = prompt('How many countries have I visited before the age of 25? You have 4 tries');
counter++;
for (var i = 0;i < 3;i++){
  if (questionSix > 12){
    questionSix = prompt('Too High! try again.');
    counter++;
  } else if (questionSix < 8){
    questionSix = prompt('Too Low! try again!');
    counter++;
  } else if (questionSix == 8 || questionSix == 9 || questionSix == 11 || questionSix == 12){
    questionSix = prompt('So Close! Try again!');
    counter++;
  } else if (questionSix == 10){
    questionSix = alert('Good Guess! I have visited' + ' ' + coutnriesArray);
    rightAnswer++;
  }
}
if (questionSix != 10){
  alert('Wrong answer. I have visited 10 countries excluding my home country.' + ' ' + coutnriesArray + '.');
}

document.write('<p>' + 'So' + ' ' + player + ', you have' + ' ' + rightAnswer + ' ' + 'out of 7 correct answers. Here is the transcript of the original questions, your answers, and the comments that were displayed to you.');
document.write('<p>' + 'Q1: What is my favorite Color?' + ' ' + questionOne + ' ' + '|' + ' ' + 'A:' + ' ' + answer1 + '</p>');
document.write('<p>' + 'Q2: Which one do you think I love more, Pizza or Burgers?' + ' ' + questionTwo + ' ' + '|' + ' ' + 'A:' + ' ' + answer2 + '</p>');
document.write('<p>' + 'Q3: I was born in January but my Passport says April! Truth or Lie?' + ' ' + questionThree + ' ' + '|' + ' ' + 'A:' + ' ' + answer3 + '</p>');
document.write('<p>' + 'Q4: My best friend\'s name start with the letter Q' + ' ' + questionFour + ' ' + '|' + ' ' + 'A:' + ' ' + answer4 + '</p>');
document.write('<p>' + 'Q5: Do you think I\'m a Dog person?' + ' ' + questionFive + ' ' + '|' + ' ' + 'A:' + ' ' + answer5 + '</p>');
document.write('<p>' + 'Q6: How many countries have I visited before the age of 25?' + 'No. of attempts:' + ' ' + counter + '.' + ' ' + 'A:' + ' ' + questionSix + ' ' + '|' + ' ' + countriesArray + '.' + '</p>');
