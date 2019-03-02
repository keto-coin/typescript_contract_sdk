

export function c_str_len(value: i32) : usize {
    let pos : usize = 0;
    while (load<u8>(value + pos) != 0) {
        pos++
    }

    return pos;
}