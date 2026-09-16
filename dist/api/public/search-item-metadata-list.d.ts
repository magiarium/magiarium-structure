import { ItemMetadata, ItemType } from '../../item';
import { ApiResultBase, LastEvaluatedKey, OrderByType } from '../common';
/** アイテム検索リクエスト */
export type SearchItemMetadataListRequest<T extends ItemType = ItemType> = {
    /** パスパラメータ */
    params: {
        /** アイテムタイプ */
        itemType: T;
    };
    /** クエリパラメータ */
    query: {
        /** 並び順 */
        orderBy?: OrderByType;
        /** 取得上限数 */
        limit?: number;
        /** 前回検索時最後の主キー */
        lastEvaluatedKey?: LastEvaluatedKey;
    };
};
/** アイテム検索レスポンス */
export type SearchItemMetadataResponse<T extends ItemType = ItemType> = ApiResultBase<ItemMetadata<T>[]>;
