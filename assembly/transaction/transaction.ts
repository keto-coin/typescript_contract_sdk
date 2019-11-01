import {__console,
    __log,
    __getFeeAccount,
    __getAccount,
    __getTransaction,
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
    __rdf_executeQuery} from "../exports/keto"
import {c_str_len, c_str_to_typescript, typescript_to_c} from "../exports/utils"


export class Transaction {

    constructor() {
        
    }

    getFeeAccount(): string {
        let value : i32 = changetype<i32>(__getFeeAccount());
        return c_str_to_typescript(value);
    }
    
    getAccount(): string {
        let value = changetype<i32>(__getAccount());
        return c_str_to_typescript(value);
    }

    getTransaction(): string {
        let value = changetype<i32>(__getTransaction());
        return c_str_to_typescript(value);
    }
    
    addTripleString(subject: string, predicate: string, value: string): void {
        __setResponseStringValue(typescript_to_c(subject),typescript_to_c(predicate),typescript_to_c(value));
    }
    
    getTripleString(subject: string, predicate: string): string {
        let value = changetype<i32>(__getRequestStringValue(typescript_to_c(subject),typescript_to_c(predicate)));
        return c_str_to_typescript(value);
    }

    addTripleLong(subject: string, predicate: string, value: i64): void {
        __setResponseLongValue(typescript_to_c(subject),typescript_to_c(predicate),value);
    }
    
    getTripleLong(subject: string, predicate: string): i64 {
        return __getRequestLongValue(typescript_to_c(subject),typescript_to_c(predicate));
    }

    addTripleFloat(subject: string, predicate: string, value: i32): void {
        __setResponseFloatValue(typescript_to_c(subject),typescript_to_c(predicate),value);
    }
    
    getTripleFloat(subject: string, predicate: string): i32 {
        return __getRequestFloatValue(typescript_to_c(subject),typescript_to_c(predicate));
    }

    addTripleBoolean(subject: string, predicate: string, value: i32): void {
        __setResponseBooleanValue(typescript_to_c(subject),typescript_to_c(predicate),value);
    }
    getTripleBoolean(subject: string, predicate: string): boolean {
        return __getRequestBooleanValue(typescript_to_c(subject),typescript_to_c(predicate)) == 0;
    }

    getTransactionValue(): u64 {
        return __getTransactionValue();
    }
    getModelTransactionValue(accountModel: string, transactionValueModel: string): u64 {
        return __getRequestModelTransactionValue(typescript_to_c(accountModel), typescript_to_c(transactionValueModel));
    }
    getFeeValue(mimimumFee: u64): u64 {
        return __getFeeValue(mimimumFee);
    }
    getTotalFeeValue(mimimumFee: u64): u64 {
        return __getTotalFeeValue(mimimumFee);
    }
    createDebitEntry(accountId: string, name: string, description: string, accountModel: string, transactionModel: string, value: u64): void {
        __createDebitEntry(typescript_to_c(accountId), typescript_to_c(name), typescript_to_c(description), typescript_to_c(accountModel), typescript_to_c(transactionModel), value);
    }
    createCreditEntry(accountId: string, name: string, description: string, accountModel: string, transactionModel: string, value: u64): void  {
        __createCreditEntry(typescript_to_c(accountId), typescript_to_c(name), typescript_to_c(description), typescript_to_c(accountModel), typescript_to_c(transactionModel), value);
    }
}

