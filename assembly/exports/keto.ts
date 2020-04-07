// keto exports

export declare function __console(msg: usize): void;
export declare function __log(level: u32, msg: usize): void;

// contract information
export declare function __getContractName(): usize;
export declare function __getContractHash(): usize;
export declare function __getContractOwner(): usize;


// transaction information
export declare function __getFeeAccount(): usize;
export declare function __getAccount(): usize;
export declare function __getDebitAccount(): usize;
export declare function __getCreditAccount(): usize;
export declare function __getTransaction(): usize;

// exported tripple methods
export declare function __getRequestStringValue(subject: usize, predicate: usize): usize;
export declare function __setResponseStringValue(subject: usize, predicate: usize, value: usize): void;
export declare function __getRequestLongValue(subject: usize, predicate: usize): number;
export declare function __setResponseLongValue(subject: usize, predicate: usize, value: i64): void;
export declare function __getRequestFloatValue(subject: usize, predicate: usize): i32;
export declare function __setResponseFloatValue(subject: usize, predicate: usize, value: i32): void;
export declare function __getRequestBooleanValue(subject: i32, predicate: usize): i32;
export declare function __setResponseBooleanValue(subject: usize, predicate: usize, value: i32): void;

// transaction methods
export declare function __getTransactionValue(): i64;
export declare function __getRequestModelTransactionValue(accountModel: usize, transactionValueModel: i32): i64;
export declare function __getFeeValue(mimimumFee: i64): i64;
export declare function __getTotalFeeValue(mimimumFee: i64): i64;
export declare function __createDebitEntry(accountId: usize, name: usize, description: usize, accountModel: usize, transactionModel: usize, value: i64): i32;
export declare function __createCreditEntry(accountId: usize, name: usize, description: usize, accountModel: usize, transactionModel: usize, value: i64): i32;

// child transaction methods
export declare function __transaction_createTransaction(): i32;
export declare function __transaction_getTransactionSignator(transactionId: i32): usize;
export declare function __transaction_getCreatorId(transactionId: i32): usize;
export declare function __transaction_getSourceAccount(transactionId: i32): usize;
export declare function __transaction_setSourceAccount(transactionId: i32, accountHash: usize): void;
export declare function __transaction_getTargetAccount(transactionId: i32): usize;
export declare function __transaction_setTargetAccount(transactionId: i32, accountHash: usize): void;
export declare function __transaction_getParent(transactionId: i32): usize;
export declare function __transaction_getTransactionValue(transactionId: i32): i64;
export declare function __transaction_setTransactionValue(transactionId: i32, value: i64): void;
export declare function __transaction_createTransactionAction(transactionId: i32, model: usize): i32;
export declare function __transaction_getActionContractName(transactionId: i32, actionId: i32): usize;
export declare function __transaction_setActionContractName(transactionId: i32, actionId: i32, name: usize): void;
export declare function __transaction_getActionContract(transactionId: i32, actionId: i32): usize;
export declare function __transaction_setActionContract(transactionId: i32, actionId: i32, name: usize): void;
export declare function __transaction_getRequestStringValue(transactionId: i32, actionId: i32, subject: usize, predicate: usize): usize;
export declare function __transaction_setRequestStringValue(transactionId: i32, actionId: i32, subject: usize, predicate: usize, value: usize): void;
export declare function __transaction_getRequestLongValue(transactionId: i32, actionId: i32, subject: usize, predicate: usize): i64;
export declare function __transaction_setRequestLongValue(transactionId: i32, actionId: i32, subject: usize, predicate: usize, value: i64): void;
export declare function __transaction_getRequestFloatValue(transactionId: i32, actionId: i32, subject: usize, predicate: usize): i32;
export declare function __transaction_setRequestFloatValue(transactionId: i32, actionId: i32, subject: usize, predicate: usize, value: i32): void;
export declare function __transaction_getRequestBooleanValue(transactionId: i32, actionId: i32, subject: i32, predicate: usize): i32;
export declare function __transaction_setRequestBooleanValue(transactionId: i32, actionId: i32, subject: usize, predicate: usize, value: i32): void;
export declare function __transaction_submit(transactionId: i32): void;
export declare function __transaction_submitWithStatus(transactionId: i32, status: usize): void;
export declare function __transaction_createNestedTransaction(transactionId: i32, encrypted: i32): usize;
export declare function __transaction_createNestedTransactionFromParent(transactionId: i32, encrypted: i32, parentHash: usize): usize;

// child nested transactions
export declare function __transaction_nested_getTransactionSignator(transactionId: i32, nestedTransactions: usize): usize;
export declare function __transaction_nested_getCreatorId(transactionId: i32, nestedTransactions: usize): usize;
export declare function __transaction_nested_getSourceAccount(transactionId: i32, nestedTransactions: usize): usize;
export declare function __transaction_nested_setSourceAccount(transactionId: i32, nestedTransactions: usize, accountHash: usize): void;
export declare function __transaction_nested_getTargetAccount(transactionId: i32, nestedTransactions: usize): usize;
export declare function __transaction_nested_setTargetAccount(transactionId: i32, nestedTransactions: usize, accountHash: usize): void;
export declare function __transaction_nested_getParent(transactionId: i32, nestedTransactions: usize): usize;
export declare function __transaction_nested_getTransactionValue(transactionId: i32, nestedTransactions: usize): i64;
export declare function __transaction_nested_setTransactionValue(transactionId: i32, nestedTransactions: usize, value: i64): void;
export declare function __transaction_nested_createTransactionAction(transactionId: i32, nestedTransactions: usize, model: usize): i32;
export declare function __transaction_nested_getActionContractName(transactionId: i32, nestedTransactions: usize, actionId: i32): usize;
export declare function __transaction_nested_setActionContractName(transactionId: i32, nestedTransactions: usize, actionId: i32, name: usize): void;
export declare function __transaction_nested_getActionContract(transactionId: i32, nestedTransactions: usize, actionId: i32): usize;
export declare function __transaction_nested_setActionContract(transactionId: i32, nestedTransactions: usize, actionId: i32, name: usize): void;
export declare function __transaction_nested_getRequestStringValue(transactionId: i32, nestedTransactions: usize, actionId: i32, subject: usize, predicate: usize): usize;
export declare function __transaction_nested_setRequestStringValue(transactionId: i32, nestedTransactions: usize, actionId: i32, subject: usize, predicate: usize, value: usize): void;
export declare function __transaction_nested_getRequestLongValue(transactionId: i32, nestedTransactions: usize, actionId: i32, subject: usize, predicate: usize): i64;
export declare function __transaction_nested_setRequestLongValue(transactionId: i32, nestedTransactions: usize, actionId: i32, subject: usize, predicate: usize, value: i64): void;
export declare function __transaction_nested_getRequestFloatValue(transactionId: i32, nestedTransactions: usize, actionId: i32, subject: usize, predicate: usize): i32;
export declare function __transaction_nested_setRequestFloatValue(transactionId: i32, nestedTransactions: usize, actionId: i32, subject: usize, predicate: usize, value: i32): void;
export declare function __transaction_nested_getRequestBooleanValue(transactionId: i32, nestedTransactions: usize, actionId: i32, subject: i32, predicate: usize): i32;
export declare function __transaction_nested_setRequestBooleanValue(transactionId: i32, nestedTransactions: usize, actionId: i32, subject: usize, predicate: usize, value: i32): void;
export declare function __transaction_nested_createNestedTransaction(transactionId: i32, nestedTransactions: usize, encrypted: i32): usize;
export declare function __transaction_nested_createNestedTransactionFromParent(transactionId: i32, nestedTransactions: usize, encrypted: i32, parentHash: usize): usize;



// rdf methods
export declare function __rdf_executeQuery(type: usize, query: usize) : i64;
export declare function __rdf_getQueryHeaderCount(id: i64) : i64;
export declare function __rdf_getQueryHeader(id: i64, index: i64) : usize;
export declare function __rdf_getQueryString(id: i64, index: i64, headerNumber: i64) : usize;
export declare function __rdf_getQueryStringByKey(id: i64, index: i64, key: usize) : usize;
export declare function __rdf_getQueryLong(id: i64, index: i64, headerNumber: i64) : i64;
export declare function __rdf_getQueryLongByKey(id: i64, index: i64, key: usize) : i64;
export declare function __rdf_getQueryFloat(id: i64, index: i64, headerNumber: i64) : i32;
export declare function __rdf_getQueryFloatByKey(id: i64, index: i64, key: usize) : i32;
export declare function __rdf_getRowCount(id: i64) : i64;

// http request methods
export declare function __http_getNumberOfRoles() : i64;
export declare function __http_getRole(index: i64) : usize;
export declare function __http_getTargetUri() : usize;
export declare function __http_getMethod() : usize;
export declare function __http_getBody() : usize;
export declare function __http_getQuery() : usize;
export declare function __http_getNumberOfParameters() : i64;
export declare function __http_getParameterKey(index: i64) : usize;
export declare function __http_getParameter(key: i32) : usize;

// http response methods
export declare function __http_setStatus(statusCode: i64) : void;
export declare function __http_setContentType(contentType: usize) : void;
export declare function __http_setBody(body: usize) : void;

