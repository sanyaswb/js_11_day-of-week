const dayOfWeek = require("./index");

test('Функция должна вернуть строку', () => {
	const type = typeof dayOfWeek(1);

	expect(type).toBe('string');
});

test('Тест. day: 1', () => {
	const res = dayOfWeek(1);

	expect(res).toBe('sunday');
});

test('Тест. day: 3', () => {
	const res = dayOfWeek(4);

	expect(res).toBe('wednesday');
});

test('Тест. day: 7', () => {
	const res = dayOfWeek(7);

	expect(res).toBe('saturday');
});

test('Тест. day: 2', () => {
	const res = dayOfWeek(2);

	expect(res).toBe('monday');
});

test('Тест. day: 6', () => {
	const res = dayOfWeek(6);

	expect(res).toBe('friday');
});

test('Тест. day: 3', () => {
	const res = dayOfWeek(3);

	expect(res).toBe('tuesday');
});