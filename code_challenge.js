/* 1)
Write a function that takes an array of data in the below format.
Assume that this function is run in a browser. It should update a tag
with id="awesome-index" with the average awesome-index of all
programmers. Your solution should continue to work even if more people
are added to the array. Write two versions, one using lodash (or
underscore) and jQuery, and one using only Javascript utilities native
to the browser. */

'use strict';

var people = [
  {
  name: 'Bob',
  occupation: 'programmer',
  awesomeIndex: 7,
  },
  {
  name: 'Alice',
  occupation: 'programmer',
  awesomeIndex: 9,
  },
  {
  name: 'Zaphod',
  occupation: 'President of the Galaxy'
  }
];

// *************** LODASH & JQUERY VERSION ****************
// lodash & jquery version of updating awesome-index id

function updateAwesomeIndexI(array) {
  var sum = [];
  sum = _.pluck(_.filter(array, { 'occupation': 'programmer' }), 'awesomeIndex');
  _.reduce(sum, function(total, n) {
    sum = (total + n) / sum.length;
    return sum;
  });
  return $('#awesome-index').append(sum);
}

updateAwesomeIndexI(people);

// ************** VANILLA JAVASCRIPT VERSION ***************
// vanilla javascript version of updating awesome-index id

var awesomeIndexVar = 0;

function updateAwesomeIndexII(array) {
  var sum = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].occupation === 'programmer') {
    sum.push(array[i].awesomeIndexVar ) ;
    awesomeIndexVar += parseInt(array[i].awesomeIndex);
    awesomeIndexVar = awesomeIndexVar   / sum.length;
    }
  }
  var el = document.getElementById('awesome-index');
  el.textContent = awesomeIndexVar ;
}

updateAwesomeIndexII(people);
