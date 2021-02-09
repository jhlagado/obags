import { CB } from "./common";
import { CBForEach } from "./for-each";
import { CBFromIterator } from "./from-iterator";
import { pipe } from "./pipe";
import { CBTake } from "./take";

test('make count up to 40 and print each number', () => {
    const printOp = jest.fn((value: string) => console.log(value));
    const iterator = [10, 20, 30, 40][Symbol.iterator]();

    pipe(
        new CBFromIterator(iterator),
        (source) => new CBTake(source, 2),
        (source) => new CBForEach(source, printOp)
    );

    expect(printOp).toHaveBeenCalledTimes(2);
})