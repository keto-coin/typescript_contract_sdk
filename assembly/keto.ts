// The entry file of your WebAssembly module.

// setup name spaceing to make the keto exposed functions easier to use
export namespace Keto {
    export class LOG_LEVEL {
        public static readonly DEBUG: u32 = 1;
        public static readonly INFO: u32 = 2;
        public static readonly WARNING: u32  = 3;
        public static readonly ERROR: u32 = 4;
        public static readonly FATAL: u32 = 5;
    }
    /**
     * 
     * @param msg 
     */
    export function console(msg: string): void {
        __console(msg);
    }
    export function log(level: u32, msg: string): void {
        __log(level,msg);
    }
    export function getFeeAccount(): string {
        return __getFeeAccount();
    }
    export function getAccount(): string {
        return __getAccount();
    }
    export function getModelUrl(): string {
        return __getModelUrl();
    }
    export function getNumberOfModels(): number {
        return __getNumberOfModels();
    }
    export function getModelNumberUrl(modelNumber: number): string {
        return __getModelNumberUrl(modelNumber);
    }
    export function addTriple(subject: string, predicate: string, value: string): string {
        return __addTriple(subject,predicate,value);
    }
    export function getStringValue(subject: string, predicate: string): string {
        return __getStringValue(subject,predicate);
    }
    export function getNumberValue(subject: string, predicate: string): number {
        return __getNumberValue(subject,predicate);
    }
    export function getBooleanValue(subject: string, predicate: string): boolean {
        return __getBooleanValue(subject,predicate);
    }
    export function getTransactionValue(): u64 {
        return __getTransactionValue();
    }
    export function getModelTransactionValue(accountModel: string, transactionValueModel: string): u64 {
        return __getModelTransactionValue(accountModel,transactionValueModel);
    }
    export function getFeeValue(mimimumFee: u64): u64 {
        return __getFeeValue(mimimumFee);
    }
    export function getTotalFeeValue(mimimumFee: u64): u64 {
        return __getTotalFeeValue(mimimumFee);
    }
    export function createDebitEntry(accountId: string, name: string, description: string, accountModel: string, transactionModel: string, value: u64): void {
        __createDebitEntry(accountId, name, description, accountModel, transactionModel, value);
    }
    export function createCreditEntry(accountId: string, name: string, description: string, accountModel: string, transactionModel: string, value: u64): void  {
        __createCreditEntry(accountId, name, description, accountModel, transactionModel, value);
    }
}


export declare function __console(msg: string): void;
export declare function __log(level: u32, msg: string): void;
export declare function __getFeeAccount(): string;
export declare function __getAccount(): string;
export declare function __getModelUrl(): string;
export declare function __getNumberOfModels(): number;
export declare function __getModelNumberUrl(modelNumber: number): string;
export declare function __addTriple(subject: string, predicate: string, value: string): string;
export declare function __getStringValue(subject: string, predicate: string): string;
export declare function __getNumberValue(subject: string, predicate: string): number;
export declare function __getBooleanValue(subject: string, predicate: string): boolean;
export declare function __getTransactionValue(): u64;
export declare function __getModelTransactionValue(accountModel: string, transactionValueModel: string): u64;
export declare function __getFeeValue(mimimumFee: u64): u64;
export declare function __getTotalFeeValue(mimimumFee: u64): u64;
export declare function __createDebitEntry(accountId: string, name: string, description: string, accountModel: string, transactionModel: string, value: u64): void;
export declare function __createCreditEntry(accountId: string, name: string, description: string, accountModel: string, transactionModel: string, value: u64): void;