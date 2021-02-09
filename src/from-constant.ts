import { CB } from "./common";
import { CBTalkback } from "./talkback";

export class CBFromConstant implements CB {
    constant: any;
    sink: CB | undefined;

    constructor(constant: any) {
        this.constant = constant;
    }

    init(sink: CB) {
        // only allow this to happen once (origin sink)
        if (!this.sink) {
            this.sink = sink;
            sink.init(this);
        }
    }

    run() {
        this.sink?.run(this.constant);
    }

    destroy() {
    }

}

// const fromIter = iter => (start, sink) => {
//     if (start !== 0) return;
//     const iterator =
//         typeof Symbol !== 'undefined' && iter[Symbol.iterator]
//             ? iter[Symbol.iterator]()
//             : iter;
//     let inloop = false;
//     let got1 = false;
//     let completed = false;
//     let res;
//     function loop() {
//         inloop = true;
//         while (got1 && !completed) {
//             got1 = false;
//             res = iterator.next();
//             if (res.done) {
//                 sink(2);
//                 break;
//             }
//             else sink(1, res.value);
//         }
//         inloop = false;
//     }
//     sink(0, t => {
//         if (completed) return

//         if (t === 1) {
//             got1 = true;
//             if (!inloop && !(res && res.done)) loop();
//         } else if (t === 2) {
//             completed = true;
//         }
//     });
// };
