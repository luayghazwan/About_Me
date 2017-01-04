'use strict';

alert('This is a Quesitonnaire about Me. Type in YES or NO to answer most of the questions.');

//Q1
var questionOne = prompt('Is Luay\'s favorite color Green?').toUpperCase();
if (questionOne === 'YES' || questionOne === 'Y' || questionOne === 'yep' || questionOne === 'yeah'){
  alert('Right, I like Ninja Turtles so that\'s why. :-)');
  var answer1 = 'Right, I like Ninja Turtles so that\'s why. :-)';
} else {
  alert('I know, there are not a lot of people who like this color, but I am unique. :-)');
  var answer1 = 'I know, there are not a lot of people who like this color, but I am unique. :-)';
}

//Q2
var questionTwo = prompt('Luay has visited more than 9 countries.').toUpperCase();
if (questionTwo === 'YES' || questionTwo === 'Y' || questionTwo === 'yep' || questionTwo === 'yeah'){
  alert('Right, I am a backpacker! I have been to Malaysia, Singapore, Turkey, China, Lebanon, Egypt, Syria, Jordan, Germany aaaand USA');
  var answer2 = 'Right, I am a backpacker! I have been to Malaysia, Singapore, Turkey, China, Lebanon, Egypt, Syria, Jordan, Germany aaaand USA';
} else {
  alert('Wrong answer. I was born to travel! ');
  var answer2 = 'Wrong answer. I was born to travel! I have been to Malaysia, Singapore, Turkey, China, Lebanon, Egypt, Syria, Jordan, Germany aaaand USA';
}

//Q3
var questionThree = prompt('Today is my birthday! Truth or Lie?').toUpperCase();
if (questionThree === 'YES' || questionThree === 'Y' || questionThree === 'yep' || questionThree === 'yeah' || questionThree === 'TRUTH'){
  alert('Nope it\'s not. It\'s on January 25th ;)');
  var answer3 = 'Nope it\'s not. It\'s on January 25th ;)';
} else {
  alert('You got me :P ... It\'s not until the 25th of Jan.');
  var answer3 = 'You got me :P ... It\'s not until the 25th of Jan.';
}

//Q4
var questionFour = prompt('My best friend\'s name start with the letter Q').toUpperCase();
if (questionFour === 'YES' || questionFour === 'Y' || questionFour === 'yep' || questionFour === 'yeah'){
  alert('You are right! His name is Qusay');
  var answer4 = 'You are right! His name is Qusay';
} else {
  alert('False. My friend\'s name is Qusay');
  var answer4 = 'False. My friend\'s name is Qusay.';
}

//Q5
var questionFive = prompt('Do you think I\'m a Dog person?').toUpperCase();
if (questionFive === 'YES' || questionFive === 'Y' || questionFive === 'yep' || questionFive === 'yeah'){
  alert('Yep, but I love rabbits more.');
  var answer5 = 'I\'m Sorry, I love Dogs.';
} else {
  alert('I\'m Sorry, I love Dogs.');
  var answer5 = 'I\'m Sorry, I love Dogs.';
}

document.write('<p>' + 'Is Luay\'s favorite color Green?' + ' ' + questionOne + ' ' + '|' + ' ' + answer1 + '</p>');
document.write('<p>' + 'Do you believe I have visited more than 9 countries?' + ' ' + questionTwo + ' ' + '|' + ' ' + answer2 + '</p>');
document.write('<p>' + 'Today is my birthday! Truth or Lie?' + ' ' + questionThree + ' ' + '|' + ' ' + answer3 + '</p>');
document.write('<p>' + 'My best friend\'s name start with the letter Q' + ' ' + questionFour + ' ' + '|' + ' ' + answer4 + '</p>');
document.write('<p>' + 'Do you think I\'m a Dog person?' + ' ' + questionFive + ' ' + '|' + ' ' + answer5 + '</p>');
