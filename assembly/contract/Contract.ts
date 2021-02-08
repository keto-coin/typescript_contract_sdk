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

    /**
     * Returns the name of the contract
     *
     * @returns The name of the current executing contract
     */
    getName(): string {
        let value = __getContractName();
        return c_str_to_typescript(value);
    }

    /**
     * Returns the unique hash for the current contract
     *
     * @returns The unique hash for the current contract
     */
    getHash(): string {
        let value = __getContractHash();
        return c_str_to_typescript(value);
    }

    /**
     * Returns the hash of the contract owner account
     *
     * @returns The unique hash for the contract owner
     */
    getOwner(): string {
        let value = __getContractOwner();
        return c_str_to_typescript(value);
    }
}