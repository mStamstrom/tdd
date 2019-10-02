import calc from './index';

describe('calculator', () => {
    it('when add gets 2 and 4 then should return 6', () => {
        expect(calc.add(2, 4)).toBe(6);
    })
});