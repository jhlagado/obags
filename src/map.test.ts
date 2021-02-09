import { Operation } from "./common";
import { CB } from "./common";
import { CBForEach } from "./for-each";
import { CBFromIterator } from "./from-iterator";
import { CBMap } from "./map";
import { pipe } from "./pipe";
import { CBTake } from "./take";

test('make count up to 40 and print each number', () => {
    const printOp = jest.fn((value: string) => console.log(value));
    const iterator = [10, 20, 30, 40][Symbol.iterator]();
    const add = (number: number) => (value: number) => value + number;

    pipe(
        new CBFromIterator(iterator),
        (source) => new CBMap(source, add(1)),
        (source) => new CBTake(source, 3),
        (source) => new CBForEach(source, printOp)
    );

    expect(printOp).toHaveBeenCalledTimes(3);
})