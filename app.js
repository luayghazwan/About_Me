'use strict';

var questionOne = prompt('Is Luay a happy person?').toUpperCase();
if (questionOne === 'YES' || questionOne === 'Y' || questionOne === 'yep' || questionOne === 'yeah'){
  alert('Yes! I love life! :-)');
  var answer1 = 'Yes! I love life! :-)';
} else {
  alert('Well, you have to know me more.');
  var answer1 = 'You answered No... Well, you have to know me more.';
}

var questionTwo = prompt('Luay has visited more than 9 countries.').toUpperCase();
if (questionTwo === 'YES' || questionTwo === 'Y' || questionTwo === 'yep' || questionTwo === 'yeah'){
  alert('Right, I am a backpacker!');
  var answer2 = 'Right, I am a backpacker!';
} else {
  alert('Wrong answer. I already did. I am a traveler!');
  var answer2 = 'Wrong answer. I am a traveler!';
}

var questionThree = prompt('Today is my birthday! Type (Yes/True) if you believe me, (No/Lie) if you don\'t.').toUpperCase();
if (questionThree === 'YES' || questionThree === 'Y' || questionThree === 'yep' || questionThree === 'yeah' || questionThree === 'True'){
  alert('Nope it\'s not. That was tricky ;)');
  var answer3 = 'Nope it\'s not. That was tricky ;)';
} else {
  alert('You got me :P ... It\'s not until the 25th');
  var answer3 = 'You got me :P ... It\'s not until the 25th';
}

var questionFour = prompt('My best friend\'s name start with the letter Q').toUpperCase();
if (questionFour === 'YES' || questionFour === 'Y' || questionFour === 'yep' || questionFour === 'yeah'){
  alert('You are right! His name is Qusay');
  var answer4 = 'You are right! His name is Qusay';
} else {
  alert('False. My friend\'s name is Qusay');
  var answer4 = 'False. My friend\'s name is Qusay';
}

var questionFive = prompt('Do you think Luay is a Dog person?').toUpperCase();
if (questionFive === 'YES' || questionFive === 'Y' || questionFive === 'yep' || questionFive === 'yeah'){
  alert('Nope, I love rabbits more.');
  var answer5 = 'Nope, I love rabbits more.';
} else {
  alert('True. My Favorite Animal is the Rabbit');
  var answer5 = 'True. My Favorite Animal is the Rabbit';
}

document.write('<p>' + 'Do you think I\'m a happy person?' + ' ' + answer1 + '</p>');
document.write('<p>' + 'Do you believe I have visited more than 9 countries before the age of 25?' + ' ' + answer2 + '</p>');
document.write('<p>' + 'Today is my birthday! Truth or Lie?' + ' ' + answer3 + '</p>');
document.write('<p>' + 'My favorite person\'s name start with the letter Q' + ' ' + answer4 + '</p>');
document.write('<p>' + 'Do you think Luay is a Dog person?' + ' ' + answer5 + '</p>');
