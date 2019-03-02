
import {__console,
    __log,
    __rdf_executeQuery,
    __rdf_getQueryString,
    __rdf_getQueryStringByKey,
    __rdf_getQueryLong,
    __rdf_getQueryLongByKey,
    __rdf_getQueryFloat,
    __rdf_getQueryFloatByKey,
    __rdf_getQueryHeader,
    __rdf_getQueryHeaderCount,
    __rdf_getRowCount} from "../exports/keto"
import {c_str_len} from "../exports/utils"

export class Error {
    msg: string;

    constructor(msg: string) {
        this.msg = msg;
    }
}

export class ResultRow {
    resultSet: ResultSet;
    index: i64;

    constructor(resultSet: ResultSet, index: i64) {
        this.resultSet = resultSet;
        this.index = index;
    }

    getQueryString(id: i64) : string {
        let value : i32 = changetype<i32>(__rdf_getQueryString(this.resultSet.index,this.index,id));
        return String.fromUTF8(changetype<usize>(value), c_str_len(value));
    }

    getQueryStringByKey(key: string) : string {
        let value : i32 = changetype<i32>(__rdf_getQueryStringByKey(this.resultSet.index,this.index,key.toUTF8()));
        return String.fromUTF8(changetype<usize>(value), c_str_len(value));
    }

    getQueryLong(id: i64) : i64 {
        return __rdf_getQueryLong(this.resultSet.index,this.index,id);
    }

    getQueryLongByKey(key: string) : i64 {
        return __rdf_getQueryLongByKey(this.resultSet.index,this.index,key.toUTF8());
    }
    
    getQueryFloat(id: i64) : i32 {
        return __rdf_getQueryFloat(this.resultSet.index,this.index,id);
    }

    getQueryFloatByKey(key: string) : i32 {
        return __rdf_getQueryFloatByKey(this.resultSet.index,this.index,key.toUTF8());
    }
}

export class ResultSet {
    index: i64;
    headerCount: i64;
    headers: String[] = [];
    currentRow : i64 = -1;
    rowCount: i64;

    constructor(index: i64) {
        this.index = index;
        this.headerCount = __rdf_getQueryHeaderCount(index);
        for (let count = 0; count < this.headerCount; count++) {
            let value : i32 = changetype<i32>(__rdf_getQueryHeader(index,count));
            this.headers.push(String.fromUTF8(changetype<usize>(value), c_str_len(value)));
        }
        this.rowCount = __rdf_getRowCount(index);
    }
    
    getHeaders() : any {
        return this.headers;
    }

    getRowCount() : i64 {
        return this.rowCount;
    }

    getRow(index: i64) : ResultRow {
        if (index > this.rowCount) {
            throw new Error("Index is out of bounds");
        }
        return new ResultRow(this,index);
    }

    nextRow() : ResultRow {
        if (this.currentRow == -1) {
            this.currentRow = 0;
        } else {
            this.currentRow++;
        }
        if (this.currentRow >= this.rowCount) {
            return null;
        }
        return new ResultRow(this,this.currentRow);
    }

    resetRow() : void {
        this.currentRow = null;
    }
}
