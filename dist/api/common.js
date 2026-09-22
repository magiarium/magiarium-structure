/** エラー種別 */
export const ERROR_TYPE = [
    'SYSTEM_ERROR',
    'BUSINESS_ERROR',
    'VALIDATION_ERROR',
    'AUTHORIZATION_ERROR',
];
/** 並び順種別 */
export const ORDER_BY_TYPE = [
    'published_at_desc',
    'published_at_asc',
    'view_count_desc',
    'view_count_asc',
];
/**
 * API例外処理用のカスタムエラークラス
 *
 * @template T エラー発生時に返却するレスポンスボディの型
 */
export class CustomError extends Error {
    /**
     * CustomError生成コンストラクタ
     *
     * @param params エラー情報
     * @param params.statusCode HTTPステータスコード
     * @param params.body エラー発生時に返却するレスポンスボディ */
    constructor({ statusCode, body }) {
        super('CustomError');
        this.statusCode = statusCode;
        this.body = body;
    }
}
