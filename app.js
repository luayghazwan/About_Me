'use strict';
var rightAnswers = 0;

function start() {
  var player = prompt('Welcome to my mini Game! Please Enter Your Name to Continue...');
  if (player){
    alert('Hello' + ' ' + player + '! My name is Luay, I will ask you some random questions about myself. If you get all of them correct, you will receive a gift from me ;-)');
  }
  // document.write('<p>' + 'So' + ' ' + player + ', you have' + ' ' + rightAnswers + ' ' + 'out of 7 correct answers. Here is the transcript of the original questions, your answers, and the comments that were displayed to you.');
  return player;
}

//Question 1
function questionOne(){
  var userAnswer1 = prompt('What is my favorite Color?').toUpperCase();
  if (userAnswer1 === 'GREEN'){
    alert('Sure! I am a Ninja Turtle. :-)');
    var answer1 = 'Sure! I am a Ninja Turtle. :-)';
    rightAnswers++;
  } else {
    alert('Wrong Answer. My favorite color is Green because I am a Ninja Turtle.');
    var answer1 = 'Wrong Answer. My favorite color is Green because I am a Ninja Turtle.';
  };
  // document.write('<p>' + 'Q1: What is my favorite Color?' + ' ' + questionOne + ' ' + '|' + ' ' + 'A:' + ' ' + answer1 + '</p>');
  return userAnswer1;
}

//Question 2
function questionTwo(){
  var userAnswer2 = prompt('Which one do you think I love more, Pizza or Burgers?').toUpperCase();
  if (userAnswer2 === 'PIZZA') {
    alert('Right, that\'s obvious, all Ninja Turtles love Pizza. :P');
    var answer2 = 'Right, that\'s obvious, all Ninja Turtles love Pizza. :P';
    rightAnswers++;
  } else {
    alert('Nope, Ninja Turtles don\'t eat Burgers.');
    var answer2 = 'Nope, Ninja Turtles don\'t eat Burgers.';
  }
  // document.write('<p>' + 'Q2: Which one do you think I love more, Pizza or Burgers?' + ' ' + questionTwo + ' ' + '|' + ' ' + 'A:' + ' ' + answer2 + '</p>');
  return userAnswer2;
}

//Question 3
function questionThree(){
  var userAnswer3 = prompt('I was born in January but my Passport says April! Truth or Lie? Hint: Don\'t be fooled by April Fools\' Day').toUpperCase();
  if (userAnswer3 === 'YES' || userAnswer3 === 'Y' || userAnswer3 === 'YEP' || userAnswer3 === 'YEAH' || userAnswer3 === 'TRUTH'){
    alert('Right, and I can\'t change it because my national ID was updated to the wrong one as well! SMH, Embassy Mistakes.');
    var answer3 = 'Right, and I can\'t change it because my national ID was updated to the wrong one as well! SMH, Embassy Mistakes.';
    rightAnswers++;
  } else {
    alert('Well, I am afraid you are wrong. Our embassy makes awful mistakes.');
    var answer3 = 'Well, I am afraid you are wrong. Our embassy makes awful mistakes.';
  }
  document.write('<p>' + 'Q3: I was born in January but my Passport says April! Truth or Lie?' + ' ' + questionThree + ' ' + '|' + ' ' + 'A:' + ' ' + answer3 + '</p>');
  return userAnswer3;
}

//Question 4
function questionFour(){
  var userAnswer4 = prompt('Two years ago, I had a Nissan but I drove Audi').toUpperCase();
  if (userAnswer4 === 'RIGHT' || userAnswer4 === 'YES' || userAnswer4 === 'REALLY' || userAnswer4 === 'TRUTH'){
    alert('You are right! My old Boss has an A4 Audi that he doesn\'t like. He did let me drive it for 6 months for free');
    var answer4 = 'You are right! My old Boss has an A4 Audi that he doesn\'t like. He did let me drive it for 6 months for free';
    rightAnswers++;
  } else {
    alert('I know it sounds hard to believe but my old Boss has an A4 Audi that he doesn\'t like. He did let me drive it for 6 months for free');
    var answer4 = 'I know it sounds hard to believe but my old Boss has an A4 Audi that he doesn\'t like. He did let me drive it for 6 months for free';
  }
  return userAnswer4;
}

//Question 5
function questionFive(){
  var userAnswer5 = prompt('Do you think I\'m a Dog person?').toUpperCase();
  if (userAnswer5 === 'YES' || userAnswer5 === 'Y' || userAnswer5 === 'YEP' || userAnswer5 === 'YEAH'){
    alert('YES! I love Dogs! I had Alaskan Husky back home and never was able to walk him outside the house because of the Hot Weather.');
    var answer5 = 'YES! I love Dogs! I had Alaskan Husky back home and never was able to walk him outside the house because of the Hot Weather.';
    rightAnswers++;
  } else {
    alert('Incorrect. I love Dogs. I had Alaskan Husky back home and never was able to walk him outside the house because of the Hot Weather.');
    var answer5 = 'Incorrect. I love Dogs. I had Alaskan Husky back home and never was able to walk him outside the house because of the Hot Weather.';
  }
  // document.write('<p>' + 'Q5: Do you think I\'m a Dog person?' + ' ' + questionFive + ' ' + '|' + ' ' + 'A:' + ' ' + answer5 + '</p>');
  return userAnswer5;
}

//Question 6
function countries () {
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
      alert('Good Guess! I have visited 10 countries excluding my home country.' + ' ' + countriesArray + '.');
      rightAnswers++;
      break;
    }
  }
  // document.write('<p>' + 'Q6: How many countries have I visited before the age of 25?' + 'No. of attempts:' + ' ' + counter + '.' + ' ' + 'A:' + ' ' + questionSix + ' ' + '|' + ' ' + countriesArray + '.' + '</p>');

  console.log(countriesArray);
  return countriesArray;
}

start();
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
countries();
