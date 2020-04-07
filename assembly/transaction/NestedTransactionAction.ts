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
    __transaction_nested_createTransactionAction,
    __transaction_nested_getActionContractName,
    __transaction_nested_setActionContractName,
    __transaction_nested_getActionContract,
    __transaction_nested_setActionContract,
    __transaction_nested_getRequestStringValue,
    __transaction_nested_setRequestStringValue,
    __transaction_nested_getRequestLongValue,
    __transaction_nested_setRequestLongValue,
    __transaction_nested_getRequestFloatValue,
    __transaction_nested_setRequestFloatValue,
    __transaction_nested_getRequestBooleanValue,
    __transaction_nested_setRequestBooleanValue} from "../exports/keto"
import {c_str_len, c_str_to_typescript} from "../exports/utils"

class ACTION_MODEL_TYPE {
    public static readonly RDF: string = "RDF";
}

export class NestedTransactionAction {
    transactionId: i32;
    nestedTransactionId: string;
    actionId: i32;

    constructor(transactionId: i32, nestedTransactionId: string) {
        this.transactionId = transactionId
        this.nestedTransactionId = nestedTransactionId;
        let utf8RDFModel = String.UTF8.encode(ACTION_MODEL_TYPE.RDF,true);
        let utf8NestedTransactionId = String.UTF8.encode(nestedTransactionId,true);
        this.actionId = __transaction_nested_createTransactionAction(this.transactionId,changetype<usize>(utf8NestedTransactionId),changetype<usize>(utf8RDFModel));
    }

    getContractName() : string {
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        return c_str_to_typescript(__transaction_nested_getActionContractName(this.transactionId,changetype<usize>(utf8NestedTransactionId), this.actionId));
    }

    setContractName(name: string) : void {
        let utf8Name = String.UTF8.encode(name,true);
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        __transaction_nested_setActionContractName(this.transactionId,changetype<usize>(utf8NestedTransactionId), this.actionId,changetype<usize>(utf8Name));
    }

    getContract() : string {
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        return c_str_to_typescript(__transaction_nested_getActionContract(this.transactionId, changetype<usize>(utf8NestedTransactionId), this.actionId));
    }

    setContract(contractHash: string) : void {
        let utf8ContractHash = String.UTF8.encode(contractHash,true);
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        __transaction_nested_setActionContract(this.transactionId, changetype<usize>(utf8NestedTransactionId), this.actionId, changetype<usize>(utf8ContractHash));
    }

    getModelStringValue(subject: string, predicate: string) : string {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        return c_str_to_typescript(__transaction_nested_getRequestStringValue(this.transactionId, changetype<usize>(utf8NestedTransactionId), this.actionId, changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate)));
    }

    setModelStringValue(subject: string, predicate: string, value: string) : void {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        let utf8Value = String.UTF8.encode(value,true);
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        __transaction_nested_setRequestStringValue(this.transactionId, changetype<usize>(utf8NestedTransactionId), this.actionId, changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate), changetype<usize>(utf8Value))
    }

    getModelLongValue(subject: string, predicate: string) : number {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        return __transaction_nested_getRequestLongValue(this.transactionId, changetype<usize>(utf8NestedTransactionId), this.actionId, changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate));
    }

    setModelLongValue(subject: string, predicate: string, value: i64) : void {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        __transaction_nested_setRequestLongValue(this.transactionId, changetype<usize>(utf8NestedTransactionId), this.actionId, changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate), value)
    }

    getModelFloatValue(subject: string, predicate: string) : number {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        return __transaction_nested_getRequestFloatValue(this.transactionId, changetype<usize>(utf8NestedTransactionId), this.actionId, changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate));
    }

    setModelFloatValue(subject: string, predicate: string, value: number) : void {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        __transaction_nested_setRequestFloatValue(this.transactionId, changetype<usize>(utf8NestedTransactionId), this.actionId, changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate), value)
    }

    getModelBooleanValue(subject: string, predicate: string) : bool {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        return __transaction_nested_getRequestBooleanValue(this.transactionId, changetype<usize>(utf8NestedTransactionId), this.actionId, changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate));
    }

    setModelBooleanValue(subject: string, predicate: string, value: bool) : void {
        let utf8Subject = String.UTF8.encode(subject,true);
        let utf8Predicate = String.UTF8.encode(predicate,true);
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        __transaction_nested_setRequestBooleanValue(this.transactionId, changetype<usize>(utf8NestedTransactionId), this.actionId, changetype<usize>(utf8Subject),changetype<usize>(utf8Predicate), (value ? 1 : 0));
    }
}