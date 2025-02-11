import { getHelloWorld } from '../src/app';

describe('getHelloWorld', () => {
    it('should return "Hello World"', () => {
        expect(getHelloWorld()).toBe('Hello World');
    });
});