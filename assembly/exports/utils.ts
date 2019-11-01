

export function c_str_len(value: i32) : usize {
    let pos : usize = 0;
    while (load<u8>(value + pos) != 0) {
        pos++
    }

    return pos;
}



export function c_str_to_typescript(value: i32) : string {
    let len = c_str_len(value);
    if (len == 0) {
        return "";
    }
    return String.UTF8.decode(changetype<ArrayBuffer>(value),true);
}

export function typescript_to_c(value: string) : i32 {
    return changetype<usize>(String.UTF8.encode(value,true))
}
