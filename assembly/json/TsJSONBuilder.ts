import "~lib/number"

export class TsJsonType {
    static readonly BASIC : string = "BASIC";
    static readonly ARRAY: string = "ARRAY";
    static readonly OBJECT: string = "OBJECT";
};

export class TsJSONBuilder {
    
    type: string;
    key: string;
    value: string;
    values: Array<TsJSONBuilder>;

    constructor(key: string = "", type: string = TsJsonType.OBJECT) {
        this.type = type;
        this.key = key;
        this.value = "";
        this.values = new Array<TsJSONBuilder>();
    }
    
    add(key: string = "", type: string = TsJsonType.OBJECT) : TsJSONBuilder {
        var entry = new TsJSONBuilder(key,type)
        this.values.push(entry);
        return entry;
    }

    addArray(key: string = "") : TsJSONBuilder {
        var entry = new TsJSONBuilder(key,TsJsonType.ARRAY)
        this.values.push(entry);
        return entry;
    }

    setKey(key: string) : TsJSONBuilder {
        this.key = key;
        return this;
    }

    set(value: string = "") : void {
            this.value = value;
    }

    setInt(value: i64) : void {
        this.value = value.toString()
    }

    setBool(value: bool) : void {
        if (value) {
            this.value = "true"
        } else {
            this.value = "false"
        }
    }
 
    toJson() : string {
        let result : string = "{";
        let sep : string = ""
        for(let count = 0; count < this.values.length; count++) {
            result += sep + this.values[count].generateJson()
            sep = ","
        }
        result += "}"
        return result;
    }   
    
    private generateJson() : string {
        let result : string = "";
        let sep : string = ""
        if (this.key.length == 0 && this.value.length !=0) {
            result = this.wrappString(this.value);
        } else if (this.key.length != 0 && this.value.length !=0) {
            result = this.wrappString(this.key) + ":" + this.wrappString(this.value)
        } else if (this.type == TsJsonType.ARRAY && this.key.length != 0 && this.values.length !=0) {
            result = this.wrappString(this.key) + ":["
            for(let count = 0; count < this.values.length; count++) {
                result += sep + this.values[count].generateJson()
                sep = ","
            }
            result += "]"
        } else if (this.type == TsJsonType.ARRAY && this.key.length == 0 && this.values.length !=0) {
            result = "["
            for(let count = 0; count < this.values.length; count++) {
                result += sep + this.values[count].generateJson()
                sep = ","
            }
            result += "]"
        } else if (this.key.length == 0 && this.values.length !=0) {
            result = "{"
            for(let count = 0; count < this.values.length; count++) {
                result += sep + this.values[count].generateJson()
                sep = ","
            }
            result += "}"
        } else if (this.key.length != 0 && this.values.length !=0) {
            result = this.wrappString(this.key) + ":{"
            for(let count = 0; count < this.values.length; count++) {
                result += sep + this.values[count].generateJson()
                sep = ","
            }
            result += "}"
        }
        return result;
    }

    private wrappString(value: string) : string {
        return "\"" + value + "\"";
    }
}