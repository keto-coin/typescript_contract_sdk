import {__console,
    __log,
    __getContractName,
    __getContractHash,
    __getContractOwner
    } from "../exports/keto"
import {c_str_len, c_str_to_typescript} from "../exports/utils"

export class Contract {

    constructor() {
        
    }

    getName(): string {
        let value = __getContractName();
        return c_str_to_typescript(value);
    }

    getHash(): string {
        let value = __getContractHash();
        return c_str_to_typescript(value);
    }

    getOwner(): string {
        let value = __getContractOwner();
        return c_str_to_typescript(value);
    }
}