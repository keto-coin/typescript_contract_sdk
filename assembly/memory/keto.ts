import {__alloc,__free} from "~lib/rt/tlsf";


export function _malloc(size: usize) : usize {
    let result = __alloc(size,0);
    __retain(result);
    return result;
}

export function _free(address: usize) : void {
    __free(address);
}