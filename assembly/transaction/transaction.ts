import {__console,
    __log,
    __getFeeAccount,
    __getAccount,
    __getDebitAccount,
    __getCreditAccount,
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
import {c_str_len, c_str_to_typescript} from "../exports/utils"
import {ChildTransaction} from "./ChildTransaction"


export class Transaction {

    constructor() {
        
    }

    getFeeAccount(): string {
        let value : i32 = __getFeeAccount();
        return c_str_to_typescript(value);
    }
    
    getAccount(): string {
        let value = __getAccount();
        return c_str_to_typescript(value);
    }

    getDebitAccount(): string {
        let value = __getDebitAccount();
        return c_str_to_typescript(value);
    }

    getCreditAccount(): string {
        let value = __getCreditAccount();
        return c_str_to_typescript(value);
    }

    getTransaction(): string {
        let value = __getTransaction();
        return c_str_to_typescript(value);
    }
    
    addTripleString(subject: string, predicate: string, value: string): void {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        let utf8Value = String.UTF8.encode(value,true);
        __setResponseStringValue(changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate),changetype<usize>(utf8Value));
    }
    
    getTripleString(subject: string, predicate: string): string {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        let value = __getRequestStringValue(changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate));
        return c_str_to_typescript(value);
    }

    addTripleLong(subject: string, predicate: string, value: i64): void {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        __setResponseLongValue(changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate),value);
    }
    
    getTripleLong(subject: string, predicate: string): i64 {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        return __getRequestLongValue(changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate));
    }

    addTripleFloat(subject: string, predicate: string, value: i32): void {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        __setResponseFloatValue(changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate),value);
    }
    
    getTripleFloat(subject: string, predicate: string): i32 {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        return __getRequestFloatValue(changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate));
    }

    addTripleBoolean(subject: string, predicate: string, value: i32): void {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        __setResponseBooleanValue(changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate),value);
    }
    getTripleBoolean(subject: string, predicate: string): boolean {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        return __getRequestBooleanValue(changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate)) == 0;
    }

    getTransactionValue(): u64 {
        return __getTransactionValue();
    }
    getModelTransactionValue(accountModel: string, transactionValueModel: string): u64 {
        let utf8AccountModel = String.UTF8.encode(accountModel,true);
        let utf8TransactionValueModel = String.UTF8.encode(transactionValueModel,true);
        return __getRequestModelTransactionValue(changetype<usize>(utf8AccountModel),changetype<usize>(utf8TransactionValueModel));
    }
    getFeeValue(mimimumFee: i64): i64 {
        return __getFeeValue(mimimumFee);
    }
    getTotalFeeValue(mimimumFee: i64): i64 {
        return __getTotalFeeValue(mimimumFee);
    }
    createDebitEntry(accountId: string, name: string, description: string, accountModel: string, transactionModel: string, value: i64): bool {
        let utf8AccountId = String.UTF8.encode(accountId,true);
        let utf8Name = String.UTF8.encode(name,true);
        let utf8Description = String.UTF8.encode(description,true);
        let utf8AccountModel = String.UTF8.encode(accountModel,true);
        let utf8TransactionModel = String.UTF8.encode(transactionModel,true);
        return (__createDebitEntry(changetype<usize>(utf8AccountId), changetype<usize>(utf8Name), changetype<usize>(utf8Description), 
            changetype<usize>(utf8AccountModel), changetype<usize>(utf8TransactionModel), value) ? true : false);
    }
    createCreditEntry(accountId: string, name: string, description: string, accountModel: string, transactionModel: string, value: i64): bool  {
        let utf8AccountId = String.UTF8.encode(accountId,true);
        let utf8Name = String.UTF8.encode(name,true);
        let utf8Description = String.UTF8.encode(description,true);
        let utf8AccountModel = String.UTF8.encode(accountModel,true);
        let utf8TransactionModel = String.UTF8.encode(transactionModel,true);
        return (__createCreditEntry(changetype<usize>(utf8AccountId), changetype<usize>(utf8Name), changetype<usize>(utf8Description), 
            changetype<usize>(utf8AccountModel), changetype<usize>(utf8TransactionModel), value) ? true : false);
    }

    createChildTransaction() : ChildTransaction {
        return new ChildTransaction();
    }
}

