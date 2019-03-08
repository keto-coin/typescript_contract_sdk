import {__http_setStatus,__http_setContentType,__http_setBody} from "../exports/keto"


export class HttpResponse {

    constructor() {
        this.setStatus(200)
    }

    setStatus(statusCode: i64) : void {
        __http_setStatus(statusCode);
    }

    setContentType(contentType: String) : void {
        __http_setContentType(contentType.toUTF8());
    }

    setBody(body: String) : void {
        __http_setBody(body.toUTF8());
    }
}