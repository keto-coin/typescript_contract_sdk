import {__alloc,__free} from "~lib/rt/tlsf";

export function c_str_len(value: i32) : usize {
    let pos : usize = 0;
    while (load<u8>(value + pos) != 0) {
        pos++
    }

    return pos;
}

export function c_str_to_typescript(value: usize) : string {
    let result : string =  String.UTF8.decode(changetype<ArrayBuffer>(value),true);
    //__release(value)
    return result;
}
