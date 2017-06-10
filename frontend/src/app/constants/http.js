export function isInformational(code) {
    return code >= 100 && code <= 199;
}

export function isSuccess(code) {
    return code >= 200 && code <= 299;
}


export function isRedirect(code) {
    return code >= 300 && code <= 399;
}

export function isClientError(code) {
    return code >= 400 && code <= 499;
}


export function isServerError(code) {
    return code >= 500 && code <= 599;
}

export const HTTP_100_CONTINUE = 100;
export const HTTP_101_SWITCHING_PROTOCOLS = 101;
export const HTTP_200_OK = 200;
export const HTTP_201_CREATED = 201;
export const HTTP_202_ACCEPTED = 202;
export const HTTP_203_NON_AUTHORITATIVE_INFORMATION = 203;
export const HTTP_204_NO_CONTENT = 204;
export const HTTP_205_RESET_CONTENT = 205;
export const HTTP_206_PARTIAL_CONTENT = 206;
export const HTTP_300_MULTIPLE_CHOICES = 300;
export const HTTP_301_MOVED_PERMANENTLY = 301;
export const HTTP_302_FOUND = 302;
export const HTTP_303_SEE_OTHER = 303;
export const HTTP_304_NOT_MODIFIED = 304;
export const HTTP_305_USE_PROXY = 305;
export const HTTP_306_RESERVED = 306;
export const HTTP_307_TEMPORARY_REDIRECT = 307;
export const HTTP_400_BAD_REQUEST = 400;
export const HTTP_401_UNAUTHORIZED = 401;
export const HTTP_402_PAYMENT_REQUIRED = 402;
export const HTTP_403_FORBIDDEN = 403;
export const HTTP_404_NOT_FOUND = 404;
export const HTTP_405_METHOD_NOT_ALLOWED = 405;
export const HTTP_406_NOT_ACCEPTABLE = 406;
export const HTTP_407_PROXY_AUTHENTICATION_REQUIRED = 407;
export const HTTP_408_REQUEST_TIMEOUT = 408;
export const HTTP_409_CONFLICT = 409;
export const HTTP_410_GONE = 410;
export const HTTP_411_LENGTH_REQUIRED = 411;
export const HTTP_412_PRECONDITION_FAILED = 412;
export const HTTP_413_REQUEST_ENTITY_TOO_LARGE = 413;
export const HTTP_414_REQUEST_URI_TOO_LONG = 414;
export const HTTP_415_UNSUPPORTED_MEDIA_TYPE = 415;
export const HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE = 416;
export const HTTP_417_EXPECTATION_FAILED = 417;
export const HTTP_428_PRECONDITION_REQUIRED = 428;
export const HTTP_429_TOO_MANY_REQUESTS = 429;
export const HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
export const HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS = 451;
export const HTTP_500_INTERNAL_SERVER_ERROR = 500;
export const HTTP_501_NOT_IMPLEMENTED = 501;
export const HTTP_502_BAD_GATEWAY = 502;
export const HTTP_503_SERVICE_UNAVAILABLE = 503;
export const HTTP_504_GATEWAY_TIMEOUT = 504;
export const HTTP_505_HTTP_VERSION_NOT_SUPPORTED = 505;
export const HTTP_511_NETWORK_AUTHENTICATION_REQUIRED = 511;
