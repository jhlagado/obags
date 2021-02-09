export interface State { }

export enum Mode {
    INIT = 0,
    RUN = 1,
    DESTROY = 2,
}

export type ArgType = CB | string | number;
export type Proc = (state: State) => (type: Mode, arg?: ArgType) => void | CB;
export type CB = { state: State; proc: Proc };
export type Operation = (value: string) => void;

export const send = (cb: CB | undefined, type: Mode, arg?: ArgType) => cb ? cb.proc(cb.state)(type, arg) : undefined;
