
import {JSONDecoder, JSONHandler} from "./decoder"

var JSON_INDENT : string = "  "

class JSONEventsHandler extends JSONHandler {
    data : any = {};
    stack : any  = new Array<any>();

    constructor() {
        super()
        this.stack.push(this.data);
    }

    setString(name: string, value: string): void {
        // Handle field
        this.getCurrent()[name] = value;
    }

    setBoolean(name: string, value: bool): void {
        // Handle field
        this.getCurrent()[name] = value;
    }

    setNull(name: string): void {
        // Handle field
        this.getCurrent()[name] = null;
    }

    setInteger(name: string, value: i32): void {
        // Handle field
        this.getCurrent()[name] = value;
    }

    pushArray(name: string): bool {
        // Handle array start
        // true means that nested object needs to be traversed, false otherwise
        // Note that returning false means JSONDecoder.startIndex need to be updated by handler
        let emptyArray = []
        this.getCurrent()[name] = emptyArray;
        this.stack.push(emptyArray);
        return true;
    }

    popArray(): void {
        this.stack.pop();
        // Handle array end
    }

    pushObject(name: string): bool {
        // Handle object start
        // true means that nested object needs to be traversed, false otherwise
        // Note that returning false means JSONDecoder.startIndex need to be updated by handler
        let emptyObject = {}
        this.getCurrent()[name] = emptyObject;
        this.stack.push(emptyObject);
        return true;
    }

    popObject(): void {
        // Handle object end
        this.stack.pop();
    }

    getData() : any {
        return this.data;
    }

    getCurrent(): any {
        return this.stack[this.stack.length - 1];
    }
}

export class TsJSON {
    static parse(value: String) : any {
        let handler  = new JSONEventsHandler();

        let decoder = new JSONDecoder<JSONEventsHandler>(handler);
        decoder.deserializeString(value)
        return handler.getData();
    }

    static stringify(value: any) : String {
        let indent : string = "";
        return this._stringify(value,indent);
    }
    
    private static _stringify(json: any, indent: string) : string {
        let result : string = "";
        let isArray : bool = this._isArray(json)
        if (isArray) {
            result = "["
        } else {
            result = "{\n"
        }
        let seperator : string = "";
        for (var count: i32 = 0; count < json.lenth; ++count) {
            if (isArray) {
                let key: any = json[count];
                if (this._isBasic(key)) {
                    result += seperator + this._wrapValue(key)
                    seperator = ",";
                } else {
                    result += seperator + this._stringify(key,indent + JSON_INDENT);
                    seperator = ",\n";
                }
            } else {
                let key: any = json[count];
                let value  = json[key];
                if (value) {
                    if (this._isBasic(value)) {
                        result += seperator + indent + this._wrapValue(key) + ":" + this._wrapValue(value);
                        seperator = ",\n";
                    } else {
                        result += seperator + this._wrapValue(key) + ":" + this._stringify(value,indent + JSON_INDENT);
                        seperator = ",\n";
                    }
                }
            }
        }

        if (isArray) {
            result = "]\n"
        } else {
            result = "}\n"
        }

        return result;
    }

    private static _isBasic(value: any) : bool {
        if (value instanceof String) {
            return true;
        } else if (value instanceof i64) {
            return true;
        } else if (value instanceof i32) {
            return true;
        }
        return false;
    }

    private static _isMap(value: any) : bool {
        return value instanceof Map;
    }

    private static _isArray(value: any) : bool {
        return value instanceof Array;
    }

    private static _wrapValue(value: any) : string {
        return + "\"" + value + "\""
    }
}