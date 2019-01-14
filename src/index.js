import './index.css';
import numeral from 'numeral';

const cousreValue = numeral(1000).format('$0,0.00'); //eslint-disable-line no-console
console.log(`I would pay ${courseValue},for this course!`);