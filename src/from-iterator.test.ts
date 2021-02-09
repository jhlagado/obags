import { CBForEach } from "./for-each";
import { CBFromIterator } from "./from-iterator";
import { CBMap } from "./map";

test('make count up to 40 and print each number', ()=>{
    const expected = [20, 40, 60, 80];
    const expectedLength = expected.length;
    const printOp = jest.fn((value: string) => {
        console.log(value);
        expect(value).toBe(expected.shift());
    });

    const iterator = [10, 20, 30, 40][Symbol.iterator]();
    const double = (value:number) => value * 2;

    const fi = new CBFromIterator(iterator);
    const m = new CBMap(fi, double);
    new CBForEach(m, printOp);

    expect(printOp).toHaveBeenCalledTimes(expectedLength);
})