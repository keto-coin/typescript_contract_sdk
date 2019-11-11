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
    __transaction_setRequestBooleanValue} from "../exports/keto"
import {c_str_len, c_str_to_typescript} from "../exports/utils"

class ACTION_MODEL_TYPE {
    public static readonly RDF: string = "RDF";
}

export class TransactionAction {
    transactionId: i32;
    actionId: i32;

    constructor(transactionId: i32) {
        this.transactionId = transactionId
        let utf8RDFModel = String.UTF8.encode(ACTION_MODEL_TYPE.RDF,true);
        this.actionId = __transaction_createTransactionAction(this.transactionId,changetype<usize>(utf8RDFModel));
    }

    getContractName() : string {
        return c_str_to_typescript(__transaction_getActionContractName(this.transactionId, this.actionId));
    }

    setContractName(name: string) : void {
        let utf8Name = String.UTF8.encode(name,true);
        __transaction_setActionContractName(this.transactionId, this.actionId,changetype<usize>(utf8Name));
    }

    getContract() : string {
        return c_str_to_typescript(__transaction_getActionContract(this.transactionId, this.actionId));
    }

    setContract(contractHash: string) : void {
        let utf8ContractHash = String.UTF8.encode(contractHash,true);
        __transaction_setActionContract(this.transactionId, this.actionId, changetype<usize>(utf8ContractHash));
    }

    getModelStringValue(subject: string, predicate: string) : string {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        return c_str_to_typescript(__transaction_getRequestStringValue(this.transactionId, this.actionId, changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate)));
    }

    setModelStringValue(subject: string, predicate: string, value: string) : void {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        let utf8Value = String.UTF8.encode(value,true);
        __transaction_setRequestStringValue(this.transactionId, this.actionId, changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate), changetype<usize>(utf8Value))
    }

    getModelLongValue(subject: string, predicate: string) : number {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        return __transaction_getRequestLongValue(this.transactionId, this.actionId, changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate));
    }

    setModelLongValue(subject: string, predicate: string, value: number) : void {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        __transaction_setRequestLongValue(this.transactionId, this.actionId, changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate), value)
    }

    getModelFloatValue(subject: string, predicate: string) : number {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        return __transaction_getRequestFloatValue(this.transactionId, this.actionId, changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate));
    }

    setModelFloatValue(subject: string, predicate: string, value: number) : void {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        __transaction_setRequestFloatValue(this.transactionId, this.actionId, changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate), value)
    }

    getModelBooleanValue(subject: string, predicate: string) : bool {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        return __transaction_getRequestBooleanValue(this.transactionId, this.actionId, changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate));
    }

    setModelBooleanValue(subject: string, predicate: string, value: bool) : void {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        __transaction_setRequestBooleanValue(this.transactionId, this.actionId, changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate), value)
    }
}