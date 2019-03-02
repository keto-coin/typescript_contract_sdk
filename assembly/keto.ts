// The entry file of your WebAssembly module.
import {ResultSet} from "./rdf/resultset"
import {__console,
    __log,
    __getFeeAccount,
    __getAccount,
    __getRequestStringValue,
    __setResponseStringValue,
    __getRequestLongValue,
    __setResponseLongValue,
    __getRequestFloatValue,
    __setResponseFloatValue,
    __getRequestBooleanValue,
    __setResponseBooleanValue,
    __getRequestModelTransactionValue,
    __getTransactionValue,
    __getFeeValue,
    __getTotalFeeValue,
    __createDebitEntry,
    __createCreditEntry,
    __rdf_executeQuery} from "./exports/keto"
import {c_str_len} from "./exports/utils"

export {ResultSet, ResultRow} from "./rdf/resultset"

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
        __console(msg.toUTF8());
    }
    export function log(level: u32, msg: string): void {
        __log(level,msg.toUTF8());
    }
    export function getFeeAccount(): string {
        let value : i32 = changetype<i32>(__getFeeAccount());
        return String.fromUTF8(value, c_str_len(value));
    }
    export function getAccount(): string {
        let value = changetype<i32>(__getAccount());
        return String.fromUTF8(value, c_str_len(value));
    }
    
    export function addTripleString(subject: string, predicate: string, value: String): void {
        __setResponseStringValue(subject.toUTF8(),predicate.toUTF8(),value.toUTF8());
    }
    export function getTripleString(subject: string, predicate: string): string {
        let value = __getRequestStringValue(subject.toUTF8(),predicate.toUTF8());
        return String.fromUTF8(changetype<usize>(value), value.lengthUTF8());
    }

    export function addTripleLong(subject: string, predicate: string, value: i64): void {
        __setResponseLongValue(subject.toUTF8(),predicate.toUTF8(),value);
    }
    export function getTripleLong(subject: string, predicate: string): i64 {
        return __getRequestLongValue(subject.toUTF8(),predicate.toUTF8());
    }

    export function addTripleFloat(subject: string, predicate: string, value: i32): void {
        __setResponseFloatValue(subject.toUTF8(),predicate.toUTF8(),value);
    }
    export function getTripleFloat(subject: string, predicate: string): i32 {
        return __getRequestFloatValue(subject.toUTF8(),predicate.toUTF8());
    }

    export function addTripleBoolean(subject: string, predicate: string, value: i32): void {
        __setResponseBooleanValue(subject.toUTF8(),predicate.toUTF8(),value);
    }
    export function getTripleBoolean(subject: string, predicate: string): boolean {
        return __getRequestBooleanValue(subject.toUTF8(),predicate.toUTF8()) == 0;
    }

    export function getTransactionValue(): u64 {
        return __getTransactionValue();
    }
    export function getModelTransactionValue(accountModel: string, transactionValueModel: string): u64 {
        return __getRequestModelTransactionValue(accountModel.toUTF8(),transactionValueModel.toUTF8());
    }
    export function getFeeValue(mimimumFee: u64): u64 {
        return __getFeeValue(mimimumFee);
    }
    export function getTotalFeeValue(mimimumFee: u64): u64 {
        return __getTotalFeeValue(mimimumFee);
    }
    export function createDebitEntry(accountId: string, name: string, description: string, accountModel: string, transactionModel: string, value: u64): void {
        __createDebitEntry(accountId.toUTF8(), name.toUTF8(), description.toUTF8(), accountModel.toUTF8(), transactionModel.toUTF8(), value);
    }
    export function createCreditEntry(accountId: string, name: string, description: string, accountModel: string, transactionModel: string, value: u64): void  {
        __createCreditEntry(accountId.toUTF8(), name.toUTF8(), description.toUTF8(), accountModel.toUTF8(), transactionModel.toUTF8(), value);
    }

    export function executeQuery(query: string) : ResultSet {
        return new ResultSet(__rdf_executeQuery(query.toUTF8()));
    }
}

