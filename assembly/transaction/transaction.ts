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
import {c_str_len} from "../exports/utils"


export class Transaction {

    constructor() {
        
    }

    getFeeAccount(): string {
        let value : i32 = changetype<i32>(__getFeeAccount());
        return String.fromUTF8(value, c_str_len(value));
    }
    
    getAccount(): string {
        let value = changetype<i32>(__getAccount());
        return String.fromUTF8(value, c_str_len(value));
    }

    getTransaction(): string {
        let value = changetype<i32>(__getTransaction());
        return String.fromUTF8(value, c_str_len(value));
    }
    
    addTripleString(subject: string, predicate: string, value: String): void {
        __setResponseStringValue(subject.toUTF8(),predicate.toUTF8(),value.toUTF8());
    }
    
    getTripleString(subject: string, predicate: string): string {
        let value = __getRequestStringValue(subject.toUTF8(),predicate.toUTF8());
        return String.fromUTF8(changetype<usize>(value), value.lengthUTF8());
    }

    addTripleLong(subject: string, predicate: string, value: i64): void {
        __setResponseLongValue(subject.toUTF8(),predicate.toUTF8(),value);
    }
    
    getTripleLong(subject: string, predicate: string): i64 {
        return __getRequestLongValue(subject.toUTF8(),predicate.toUTF8());
    }

    addTripleFloat(subject: string, predicate: string, value: i32): void {
        __setResponseFloatValue(subject.toUTF8(),predicate.toUTF8(),value);
    }
    
    getTripleFloat(subject: string, predicate: string): i32 {
        return __getRequestFloatValue(subject.toUTF8(),predicate.toUTF8());
    }

    addTripleBoolean(subject: string, predicate: string, value: i32): void {
        __setResponseBooleanValue(subject.toUTF8(),predicate.toUTF8(),value);
    }
    getTripleBoolean(subject: string, predicate: string): boolean {
        return __getRequestBooleanValue(subject.toUTF8(),predicate.toUTF8()) == 0;
    }

    getTransactionValue(): u64 {
        return __getTransactionValue();
    }
    getModelTransactionValue(accountModel: string, transactionValueModel: string): u64 {
        return __getRequestModelTransactionValue(accountModel.toUTF8(),transactionValueModel.toUTF8());
    }
    getFeeValue(mimimumFee: u64): u64 {
        return __getFeeValue(mimimumFee);
    }
    getTotalFeeValue(mimimumFee: u64): u64 {
        return __getTotalFeeValue(mimimumFee);
    }
    createDebitEntry(accountId: string, name: string, description: string, accountModel: string, transactionModel: string, value: u64): void {
        __createDebitEntry(accountId.toUTF8(), name.toUTF8(), description.toUTF8(), accountModel.toUTF8(), transactionModel.toUTF8(), value);
    }
    createCreditEntry(accountId: string, name: string, description: string, accountModel: string, transactionModel: string, value: u64): void  {
        __createCreditEntry(accountId.toUTF8(), name.toUTF8(), description.toUTF8(), accountModel.toUTF8(), transactionModel.toUTF8(), value);
    }
}

