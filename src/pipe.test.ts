import { CBForEach } from "./for-each";
import { CBFromIterator } from "./from-iterator";
import { pipe } from "./pipe";

test('make count up to 40 and print each number', () => {
    const expected = [10, 20, 30, 40];
    const expectedLength = expected.length;
    const printOp = jest.fn((value: string) => {
        console.log(value);
        expect(value).toBe(expected.shift());
    });

    const iterator = [10, 20, 30, 40][Symbol.iterator]();

    pipe(
        new CBFromIterator(iterator),
        (source) => new CBForEach(source, printOp)
    );
    expect(printOp).toHaveBeenCalledTimes(expectedLength);
})