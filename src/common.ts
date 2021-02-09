export interface CB {
    init(sink?: CB): void;
    run(data?: any): void;
    destroy(err?: string): void;
}

export interface SinkCB {
    source: CB;
}

export type Effect = (value: string) => void;
export type Mapper = (value: any) => any;
export type Reducer = (acc:any, value: any) => any;

export type SinkFactory = (source: CB) => CB;
