
import {
    __getAccount,
    __http_getNumberOfRoles,
    __http_getRole,
    __http_getTargetUri,
    __http_getMethod,
    __http_getBody,
    __http_getNumberOfParameters,
    __http_getParameterKey,
    __http_getParameter,
    __http_getQuery
} from "../exports/keto"
import {c_str_len} from "../exports/utils"

export class HttpRequest {
    
    roles: String[] = [];
    parameterKeys: String[] = [];

    constructor() {
        let roleCount = __http_getNumberOfRoles();
        for (let count = 0; count < roleCount; count++) {
            let value : i32 = changetype<i32>(__http_getRole(count));
            this.roles.push(String.fromUTF8(changetype<usize>(value), c_str_len(value)));
        }

        let parameterCount = __http_getNumberOfParameters();
        for (let count = 0; count < parameterCount; count++) {
            let value : i32 = changetype<i32>(__http_getParameterKey(count));
            this.parameterKeys.push(String.fromUTF8(changetype<usize>(value), c_str_len(value)));
        }
    }

    getAccount() : string {
        return __getAccount();
    }

    getRoles() : String[] {
        return this.roles;
    }

    isAccountInRole(role: String) : bool {
        for (let index = 0; index < this.roles.length; index++) {
            if (this.roles[index] == role) {
                return true;
            }
        }
        return false;
    }

    getTarget() : String {
        let value : i32 = changetype<i32>(__http_getTargetUri());
        return String.fromUTF8(changetype<usize>(value), c_str_len(value))
    }

    getQuery() : String {
        let value : i32 = changetype<i32>(__http_getQuery());
        return String.fromUTF8(changetype<usize>(value), c_str_len(value))
    }

    getMethod() : String {
        let value : i32 = changetype<i32>(__http_getMethod());
        return String.fromUTF8(changetype<usize>(value), c_str_len(value))
    }

    getBody() : String {
        let value : i32 = changetype<i32>(__http_getBody());
        return String.fromUTF8(changetype<usize>(value), c_str_len(value))
    }

    getParameterKeys() : String[] {
        return this.parameterKeys;
    }

    getParameter(key: String) : String {
        let value : i32 = changetype<i32>(__http_getParameter(key.toUTF8()));
        return String.fromUTF8(changetype<usize>(value), c_str_len(value))
    }

}