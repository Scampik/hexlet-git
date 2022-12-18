import capitalize from '../src/half.js';

if (capitalize('') !== '') {
  throw new Error('Mda');
}

if (capitalize('hello') !== 'Hello') {
  throw new Error('Mda');
}

console.log('Все тесты пройдены!');
