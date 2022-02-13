// split()
const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';

const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);

const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// substr()
const anotherPart = anthem.substr(11, 8);
// console.log(anotherPart);

// substring()
const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

// concat()
const first = 'Amader';
const second = 'City';
// const fullString = first + second;
const fullString = first.concat(second).concat('Rj kibriya');
// console.log(fullString);

// join()
/* 
const words2 = ['A', 'n', 'w', 'a', 'r', 'u', 'l'];
const allJoins = words2.join('');
const words2 = ['Abid', 'nabid', 'kabid', 'abul'];
const allJoins = words2.join(' ');
const words2 = ['Abid', 'nabid', 'kabid', 'abul'];
const allJoins = words2.join(',');
const words2 = ['Abid', 'nabid', 'kabid', 'abul'];
const allJoins = words2.join(', ');
const words2 = ['Abid', 'nabid', 'kabid', 'abul'];
const allJoins = words2.join('www');
console.log(allJoins);
 */
