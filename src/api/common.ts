export type ApiResultBase<T> =
  | {
      success: true;
      results: T;
    }
  | {
      success: false;
      error: {
        message: string;
        details?: ErrorDetail[];
      };
    };

/** エラー種別 */
export const ERROR_TYPE = ['SYSTEM_ERROR', 'BUSINESS_ERROR'] as const;
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

export const ORDER_BY_TYPE = [
  'published_at_desc',
  'published_at_asc',
  'view_count_desc',
  'view_count_asc',
] as const;
export type OrderByType = (typeof ORDER_BY_TYPE)[number];
