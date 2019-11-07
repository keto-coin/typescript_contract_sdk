// keto exports

export declare function __console(msg: usize): void;
export declare function __log(level: u32, msg: usize): void;
export declare function __getFeeAccount(): usize;
export declare function __getAccount(): usize;
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
export declare function __getTransactionValue(): u64;
export declare function __getRequestModelTransactionValue(accountModel: usize, transactionValueModel: i32): u64;
export declare function __getFeeValue(mimimumFee: u64): u64;
export declare function __getTotalFeeValue(mimimumFee: u64): u64;
export declare function __createDebitEntry(accountId: usize, name: usize, description: usize, accountModel: usize, transactionModel: usize, value: u64): void;
export declare function __createCreditEntry(accountId: usize, name: usize, description: usize, accountModel: usize, transactionModel: usize, value: u64): void;

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

