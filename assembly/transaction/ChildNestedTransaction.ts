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
    __transaction_createNestedTransaction,
    __transaction_createNestedTransactionFromParent,
    __transaction_nested_getTransactionSignator,
    __transaction_nested_getCreatorId,
    __transaction_nested_getSourceAccount,
    __transaction_nested_setSourceAccount,
    __transaction_nested_getTargetAccount,
    __transaction_nested_setTargetAccount,
    __transaction_nested_getParent,
    __transaction_nested_getTransactionValue,
    __transaction_nested_setTransactionValue,
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
    __transaction_nested_setRequestBooleanValue,
    __transaction_nested_createNestedTransaction,
    __transaction_nested_createNestedTransactionFromParent} from "../exports/keto"
import {c_str_len, c_str_to_typescript} from "../exports/utils"
import {NestedTransactionAction} from "./NestedTransactionAction"

export class ChildNestedTransaction {
    transactionId: i32;
    nestedTransactionId: string;
    actions: NestedTransactionAction[];
    nested: ChildNestedTransaction[];

    constructor(transactionId: i32, nestedTransactionId: string | null = null, encrypted: bool = false, parentHash : string | null = null) {
        this.transactionId = transactionId;
        if (nestedTransactionId) {
            let utf8NestedTransactionId = String.UTF8.encode(nestedTransactionId,true);
            if (parentHash) {
                let utf8ParentHash = String.UTF8.encode(parentHash,true);
                this.nestedTransactionId = c_str_to_typescript(__transaction_nested_createNestedTransactionFromParent(transactionId,changetype<usize>(utf8NestedTransactionId),(encrypted ? 1 : 1),changetype<usize>(utf8ParentHash)));
            } else {
                this.nestedTransactionId = c_str_to_typescript(__transaction_nested_createNestedTransaction(transactionId,changetype<usize>(utf8NestedTransactionId),(encrypted ? 1 : 1)));
            }
        } else {
            if (parentHash) {
                let utf8ParentHash = String.UTF8.encode(parentHash,true);
                this.nestedTransactionId = c_str_to_typescript(__transaction_createNestedTransactionFromParent(transactionId,(encrypted ? 1 : 1),changetype<usize>(utf8ParentHash)));
                
            } else {
                this.nestedTransactionId = c_str_to_typescript(__transaction_createNestedTransaction(transactionId,(encrypted ? 1 : 1)));
            }
        }
    }

    getTransactionSignator(): string {
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        return c_str_to_typescript(__transaction_nested_getTransactionSignator(this.transactionId,changetype<usize>(utf8NestedTransactionId)));
    }

    getCreatorId(): string {
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        return c_str_to_typescript(__transaction_nested_getCreatorId(this.transactionId,changetype<usize>(utf8NestedTransactionId)));
    }

    getSourceAccount(): string {
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        return c_str_to_typescript(__transaction_nested_getSourceAccount(this.transactionId,changetype<usize>(utf8NestedTransactionId)));
    }

    setSourceAccount(accountHash: string): void {
        let utf8AccountHash = String.UTF8.encode(accountHash,true);
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        __transaction_nested_setSourceAccount(this.transactionId,changetype<usize>(utf8NestedTransactionId),changetype<usize>(utf8AccountHash));
    }

    getTargetAccount(): string {
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        return c_str_to_typescript(__transaction_nested_getTargetAccount(this.transactionId,changetype<usize>(utf8NestedTransactionId)));
    }

    setTargetAccount(accountHash: string): void {
        let utf8AccountHash = String.UTF8.encode(accountHash,true);
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        __transaction_nested_setTargetAccount(this.transactionId,changetype<usize>(utf8NestedTransactionId),changetype<usize>(utf8AccountHash));
    }

    getParent(): string {
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        return c_str_to_typescript(__transaction_nested_getParent(this.transactionId,changetype<usize>(utf8NestedTransactionId)));
    }

    getTransactionValue(): i64 {
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        return __transaction_nested_getTransactionValue(this.transactionId,changetype<usize>(utf8NestedTransactionId));
    }

    setTransactionValue(value: i64): void {
        let utf8NestedTransactionId = String.UTF8.encode(this.nestedTransactionId,true);
        __transaction_nested_setTransactionValue(this.transactionId,changetype<usize>(utf8NestedTransactionId),value);
    }

    createAction() : NestedTransactionAction {
        let nestedTransactionAction = new NestedTransactionAction(this.transactionId,this.nestedTransactionId);
        this.actions.push(nestedTransactionAction);
        return nestedTransactionAction;
    }

    createNestedTransaction(encrypted: bool) : ChildNestedTransaction {
        let childNestedTransaction = new ChildNestedTransaction(this.transactionId,this.nestedTransactionId,encrypted,null);
        this.nested.push(childNestedTransaction);
        return childNestedTransaction;
    }

    createNestedTransactionFromParent(encrypted: bool, parentHash: string) : ChildNestedTransaction {
        let childNestedTransaction = new ChildNestedTransaction(this.transactionId,this.nestedTransactionId,encrypted,parentHash);
        this.nested.push(childNestedTransaction);
        return childNestedTransaction;
    }

}
