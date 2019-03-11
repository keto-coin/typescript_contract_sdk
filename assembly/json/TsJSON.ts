
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
    
}