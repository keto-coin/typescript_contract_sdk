// The entry file of your WebAssembly module.

export namespace Keto {
    export class LOG_LEVEL {
        public static readonly DEBUG: u32 = 1;
        public static readonly INFO: u32 = 2;
        public static readonly WARNING: u32  = 3;
        public static readonly ERROR: u32 = 4;
        public static readonly FATAL: u32 = 5;
    }
    export declare function console(msg: string): void;
    export declare function log(level: u32, msg: string): void;
    export declare function getAccount(): string;
    export declare function getModelUrl(): string;
    export declare function getNumberOfModels(): number;
    export declare function getModelNumberUrl(modelNumber: number): string;
}
