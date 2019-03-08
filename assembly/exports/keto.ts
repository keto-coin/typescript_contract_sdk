// keto exports

export declare function __console(msg: i32): void;
export declare function __log(level: u32, msg: i32): void;
export declare function __getFeeAccount(): string;
export declare function __getAccount(): string;
export declare function __getTransaction(): string;

// exported tripple methods
export declare function __getRequestStringValue(subject: i32, predicate: i32): string;
export declare function __setResponseStringValue(subject: i32, predicate: i32, value: i32): void;
export declare function __getRequestLongValue(subject: i32, predicate: i32): number;
export declare function __setResponseLongValue(subject: i32, predicate: i32, value: i64): void;
export declare function __getRequestFloatValue(subject: i32, predicate: i32): i32;
export declare function __setResponseFloatValue(subject: i32, predicate: i32, value: i32): void;
export declare function __getRequestBooleanValue(subject: i32, predicate: i32): i32;
export declare function __setResponseBooleanValue(subject: i32, predicate: i32, value: i32): void;

// transaction methods
export declare function __getTransactionValue(): u64;
export declare function __getRequestModelTransactionValue(accountModel: i32, transactionValueModel: i32): u64;
export declare function __getFeeValue(mimimumFee: u64): u64;
export declare function __getTotalFeeValue(mimimumFee: u64): u64;
export declare function __createDebitEntry(accountId: i32, name: i32, description: i32, accountModel: i32, transactionModel: i32, value: u64): void;
export declare function __createCreditEntry(accountId: i32, name: i32, description: i32, accountModel: i32, transactionModel: i32, value: u64): void;

// rdf methods
export declare function __rdf_executeQuery(type: i32, query: i32) : i64;
export declare function __rdf_getQueryHeaderCount(id: i64) : i64;
export declare function __rdf_getQueryHeader(id: i64, index: i64) : string;
export declare function __rdf_getQueryString(id: i64, index: i64, headerNumber: i64) : string;
export declare function __rdf_getQueryStringByKey(id: i64, index: i64, key: i32) : string;
export declare function __rdf_getQueryLong(id: i64, index: i64, headerNumber: i64) : i64;
export declare function __rdf_getQueryLongByKey(id: i64, index: i64, key: i32) : i64;
export declare function __rdf_getQueryFloat(id: i64, index: i64, headerNumber: i64) : i32;
export declare function __rdf_getQueryFloatByKey(id: i64, index: i64, key: i32) : i32;
export declare function __rdf_getRowCount(id: i64) : i64;

// http request methods
export declare function __http_getNumberOfRoles() : i64;
export declare function __http_getRole(index: i64) : i32;
export declare function __http_getTargetUri() : i32;
export declare function __http_getMethod() : i32;
export declare function __http_getBody() : i32;
export declare function __http_getQuery() : i32;
export declare function __http_getNumberOfParameters() : i64;
export declare function __http_getParameterKey(index: i64) : i32;
export declare function __http_getParameter(key: i32) : i32;

// http response methods
export declare function __http_setStatus(statusCode: i64) : void;
export declare function __http_setContentType(contentType: i32) : void;
export declare function __http_setBody(body: i32) : void;