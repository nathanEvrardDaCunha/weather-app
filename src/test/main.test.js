import { describe, expect, it } from 'vitest';
import { sum } from '../js/main';

describe('sum', () => {
    it('should return the addition of two number', () => {
        const first = 1;
        const second = 4;

        const result = sum(first, second);

        expect(result).toBe(5);
    });
});
