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
    export declare function buildString(msg: string, ...params: any[]): void;
    export declare function getAccount(): string;
    export declare function getModelUrl(): string;
    export declare function getNumberOfModels(): number;
    export declare function getModelNumberUrl(modelNumber: number): string;
    export declare function addTriple(subject: string, predicate: string, value: string): string;
    export declare function getStringValue(subject: string, predicate: string): string;
    export declare function getNumberValue(subject: string, predicate: string): number;
    export declare function getBooleanValue(subject: string, predicate: string): boolean;
    export declare function getTransactionValue(): u64;
    export declare function getModelTransactionValue(accountModel: string, transactionValueModel: string): u64;
    export declare function getFeeValue(): u64;
    export declare function createDebitEntry(accountModel: string, transactionModel: string, value: u64): void;
    export declare function createCreditEntry(accountModel: string, transactionModel: string, value: u64): void;
}
