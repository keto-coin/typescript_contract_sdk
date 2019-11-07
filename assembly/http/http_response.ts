import {__http_setStatus,__http_setContentType,__http_setBody} from "../exports/keto"
import {c_str_len, c_str_to_typescript} from "../exports/utils"

export class HttpResponse {

    constructor() {
        this.setStatus(200)
    }

    setStatus(statusCode: i64) : void {
        __http_setStatus(statusCode);
    }

    setContentType(contentType: string) : void {
        let utf8Query = String.UTF8.encode(contentType,true);
        __http_setContentType(changetype<usize>(utf8Query));
    }

    setBody(body: string) : void {
        let utf8Body = String.UTF8.encode(body,true);
        __http_setBody(changetype<usize>(utf8Body));
    }
}