import capitalize from '../src/half.js';
import { strict as asserts} from 'node:assert';

asserts.equal(capitalize(''), '');
asserts.equal(capitalize('hello'), 'Hesllo');

console.log('Все тесты пройдены!');
