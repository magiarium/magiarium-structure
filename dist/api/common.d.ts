export type ApiResultBase<T> = {
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
export declare const ERROR_TYPE: readonly ["SYSTEM_ERROR", "BUSINESS_ERROR", "VALIDATION_ERROR", "AUTHORIZATION_ERROR"];
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
/** LastEvaluatedKey */
export type LastEvaluatedKey = {
    pk: string;
    sk: string;
    gsiPk: string;
    gsiSk: string;
};
/** 並び順種別 */
export declare const ORDER_BY_TYPE: readonly ["published_at_desc", "published_at_asc", "view_count_desc", "view_count_asc"];
export type OrderByType = (typeof ORDER_BY_TYPE)[number];
/**
 * API例外処理用のカスタムエラークラス
 *
 * @template T エラー発生時に返却するレスポンスボディの型
 */
export declare class CustomError<T = never> extends Error {
    /** HTTPステータスコード */
    statusCode: number;
    /** エラー発生時に返却するレスポンスボディ */
    body: T;
    /**
     * CustomError生成コンストラクタ
     *
     * @param params エラー情報
     * @param params.statusCode HTTPステータスコード
     * @param params.body エラー発生時に返却するレスポンスボディ */
    constructor({ statusCode, body }: {
        statusCode: number;
        body: NoInfer<T>;
    });
}
