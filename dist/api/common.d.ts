export type ApiResponseBase<T> = {
    success: true;
    results: T;
} | {
    success: false;
    error: {
        message: string;
        details?: ErrorDetail[];
    };
};
/** エラー種別 */
export declare const ERROR_TYPE: readonly ["SYSTEM_ERROR", "BUSINESS_ERROR"];
export type ErrorType = (typeof ERROR_TYPE)[number];
/** エラー詳細 */
export type ErrorDetail = {
    /** エラー発生箇所 */
    field: string;
    /** エラー種別 */
    errorType: ErrorType;
    /** エラー内容 */
    issue: string;
};
export type LastEvaluatedKey = {
    pk: string;
    sk: string;
    gsiPk: string;
    gsiSk: string;
};
