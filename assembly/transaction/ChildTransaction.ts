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
    __rdf_executeQuery,
    __transaction_createTransaction,
    __transaction_getTransactionSignator,
    __transaction_getCreatorId,
    __transaction_getSourceAccount,
    __transaction_setSourceAccount,
    __transaction_getTargetAccount,
    __transaction_setTargetAccount,
    __transaction_getParent,
    __transaction_getTransactionValue,
    __transaction_setTransactionValue,
    __transaction_createTransactionAction,
    __transaction_getActionContractName,
    __transaction_setActionContractName,
    __transaction_getActionContract,
    __transaction_setActionContract,
    __transaction_getRequestStringValue,
    __transaction_setRequestStringValue,
    __transaction_getRequestLongValue,
    __transaction_setRequestLongValue,
    __transaction_getRequestFloatValue,
    __transaction_setRequestFloatValue,
    __transaction_getRequestBooleanValue,
    __transaction_setRequestBooleanValue,
    __transaction_submit} from "../exports/keto"
import {c_str_len, c_str_to_typescript} from "../exports/utils"
import {TransactionAction} from "./TransactionAction"

export class ChildTransaction {
    transactionId: i32;
    actions: TransactionAction[];
    
    constructor() {
        this.transactionId = __transaction_createTransaction()
    }


    getTransactionSignator(): string {
        return c_str_to_typescript(__transaction_getTransactionSignator(this.transactionId))
    }

    getCreatorId(): string {
        return c_str_to_typescript(__transaction_getCreatorId(this.transactionId));
    }

    getSourceAccount(): string {
        return c_str_to_typescript(__transaction_getSourceAccount(this.transactionId));
    }

    setSourceAccount(accountHash: string): void {
        let utf8AccountHash = String.UTF8.encode(accountHash,true);
        __transaction_setSourceAccount(this.transactionId,changetype<usize>(utf8AccountHash));
    }

    getTargetAccount(): string {
        return c_str_to_typescript(__transaction_getTargetAccount(this.transactionId));
    }

    setTargetAccount(accountHash: string): void {
        let utf8AccountHash = String.UTF8.encode(accountHash,true);
        __transaction_setTargetAccount(this.transactionId,changetype<usize>(utf8AccountHash));
    }

    getParent(): string {
        return c_str_to_typescript(__transaction_getParent(this.transactionId));
    }

    getTransactionValue(): number {
        return __transaction_getTransactionValue(this.transactionId);
    }

    setTransactionValue(value: number): void {
        __transaction_setTransactionValue(this.transactionId,value);
    }

    createAction() : TransactionAction {
        let transactionAction = new TransactionAction(this.transactionId);
        this.actions.push(transactionAction);
        return transactionAction;
    }

    submit() : void {
        __transaction_submit(this.transactionId);
    }


}