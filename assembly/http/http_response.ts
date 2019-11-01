import {__http_setStatus,__http_setContentType,__http_setBody} from "../exports/keto"
import {c_str_len, c_str_to_typescript, typescript_to_c} from "../exports/utils"

export class HttpResponse {

    constructor() {
        this.setStatus(200)
    }

    setStatus(statusCode: i64) : void {
        __http_setStatus(statusCode);
    }

    setContentType(contentType: string) : void {
        __http_setContentType(typescript_to_c(contentType));
    }

    setBody(body: string) : void {
        __http_setBody(typescript_to_c(body));
    }
}