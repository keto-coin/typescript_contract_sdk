
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
import {c_str_len, c_str_to_typescript} from "../exports/utils"

export class HttpRequest {
    
    roles: string[] = [];
    parameterKeys: string[] = [];

    constructor() {
        let roleCount = __http_getNumberOfRoles();
        for (let count = 0; count < roleCount; count++) {
            let value : i32 = changetype<i32>(__http_getRole(count));
            if (value == 0) {
                continue;
            }
            this.roles.push(c_str_to_typescript(value));
        }

        let parameterCount = __http_getNumberOfParameters();
        for (let count = 0; count < parameterCount; count++) {
            let value : i32 = changetype<i32>(__http_getParameterKey(count));
            if (value == 0) {
                continue;
            }
            this.parameterKeys.push(c_str_to_typescript(value));
        }
    }

    getAccount() : string {
        let value = changetype<i32>(__getAccount());
        if (value == 0) {
            return "";
        }
        return c_str_to_typescript(value);
    }

    getRoles() : string[] {
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

    getTarget() : string {
        let value : i32 = changetype<i32>(__http_getTargetUri());
        return c_str_to_typescript(value);
    }

    getQuery() : string {
        let value : i32 = changetype<i32>(__http_getQuery());
        return c_str_to_typescript(value);
    }

    getMethod() : string {
        let value : i32 = changetype<i32>(__http_getMethod());
        return c_str_to_typescript(value);
    }

    getBody() : string {
        let value : i32 = changetype<i32>(__http_getBody());
        return c_str_to_typescript(value);
    }

    getParameterKeys() : string[] {
        return this.parameterKeys;
    }

    getParameter(key: string) : string {
        let value : i32 = changetype<i32>(__http_getParameter(key.toUTF8()));
        return c_str_to_typescript(value)
    }

}