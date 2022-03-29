import Character from '../Character';
import Daemon from '../Daemon';

test('uncorrect name character', () => {
	expect(() => new Daemon('A')).toThrowError(
	  new Error('Длина имени должна быть не менее 2-ух и не более 10-ти символов'),
	);
  });
  
test('uncorrect type character', () => {
	expect(() => new Character('Anatoly', 'Druid')).toThrowError(
	  new Error('Некорректный тип персонажа'),
	);
});