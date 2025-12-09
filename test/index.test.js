
const { capitalizeWords, filterActiveUsers, logAction } = require('../index.js');

describe('capitalizeWords', () => {
    test('capitalizes the first letter of each word', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('handles single-word input', () => {
        expect(capitalizeWords('javascript')).toBe('Javascript');
    });

    test('returns an empty string for empty input', () => {
        expect(capitalizeWords('')).toBe('');
    });

    test('ignores extra spaces between words', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });
});

describe('filterActiveUsers', () => {
    test('returns only active users', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false },
        ];

        const result = filterActiveUsers(users);

        expect(result).toEqual([{ name: 'Alice', isActive: true }]);
    });

    test('returns empty array when no users are active', () => {
        const users = [
            { name: 'Test1', isActive: false },
            { name: 'Test2', isActive: false },
        ];

        expect(filterActiveUsers(users)).toEqual([]);
    });

    test('returns empty array when given empty input', () => {
        expect(filterActiveUsers([])).toEqual([]);
    });
});

describe('logAction', () => {
    test('returns a string in the correct format', () => {
        const output = logAction('login', 'Alice');

        // Check general structure without matching exact date
        expect(output).toMatch(/^User Alice performed login at .+Z$/);
    });

    test('includes the correct username and action', () => {
        const output = logAction('update-profile', 'Bob');

        expect(output).toContain('Bob');
        expect(output).toContain('update-profile');
    });
});

