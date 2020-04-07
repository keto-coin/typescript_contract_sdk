// The entry file of your WebAssembly module.
import {ResultSet} from "./rdf/resultset"
import {Transaction} from "./transaction/transaction"
import {Contract} from "./contract/Contract"
import {HttpRequest} from "./http/http_request"
import {HttpResponse} from "./http/http_response"
import {__console,
    __log,
    __getFeeAccount,
    __getAccount,
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
    __rdf_executeQuery} from "./exports/keto"
import {c_str_len} from "./exports/utils"
 
export {_malloc, _free} from "./memory/keto"
export {ResultSet, ResultRow} from "./rdf/resultset"
export {Transaction} from "./transaction/transaction"
export {Contract} from "./contract/Contract"
export {HttpRequest} from "./http/http_request"
export {HttpResponse} from "./http/http_response"

// setup name spaceing to make the keto exposed functions easier to use
export namespace Keto {

    export class QUERY_TYPES {
        public static readonly REMOTE: string = "REMOTE_SPARQL_QUERY";
        public static readonly SESSION: string = "SESSION_SPARQL_QUERY";
    }    

    export class LOG_LEVEL {
        public static readonly DEBUG: u32 = 1;
        public static readonly INFO: u32 = 2;
        public static readonly WARNING: u32  = 3;
        public static readonly ERROR: u32 = 4;
        public static readonly FATAL: u32 = 5;
    }

    /**
     * 
     * @param msg 
     */
    export function console(msg: string): void {
        let utf8Msg = String.UTF8.encode(msg,true);
        __console(changetype<usize>(utf8Msg));
    }
    export function log(level: u32, msg: string): void {
        let utf8Msg = String.UTF8.encode(msg,true);
        __log(level,changetype<usize>(utf8Msg));
    }
    
    export function contract() : Contract {
        return new Contract();
    }

    export function transaction() : Transaction {
        return new Transaction();
    }

    export function httpRequest() : HttpRequest {
        return new HttpRequest();
    }

    export function httpResponse() : HttpResponse {
        return new HttpResponse();
    }

    export function executeQuery(query: string, type: string = QUERY_TYPES.SESSION) : ResultSet {
        let utf8Query = String.UTF8.encode(query,true);
        let utf8Type = String.UTF8.encode(type,true);
        return new ResultSet(__rdf_executeQuery(changetype<usize>(utf8Type),changetype<usize>(utf8Query)));
    }
}

