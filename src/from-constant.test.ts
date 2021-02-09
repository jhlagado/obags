import { CBForEach } from "./for-each";
import { CBFromConstant } from "./from-constant";
import { pipe } from "./pipe";
import { CBTake } from "./take";


const times = 10;
test('make count up to 40 and print each number', () => {
    const printOp = jest.fn((value: string) => console.log(value));
    pipe(
        new CBFromConstant(1000),
        (source) => new CBTake(source, times),
        (source) => new CBForEach(source, printOp)
    );
    expect(printOp).toHaveBeenCalledTimes(times);
})