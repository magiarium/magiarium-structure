import { ItemMetadata, ItemType } from '../../item/common';
import { ApiResultBase, LastEvaluatedKey, OrderByType } from '../common';
export type GetPublicItemMetadataListRequest<T extends ItemType = ItemType> = {
    /** パスパラメータ */
    params: {
        /** アイテム種別 */
        itemType: T;
    };
    /** クエリパラメータ */
    query: {
        /** 取得するItemIDのリスト(カンマ区切りで複数指定可) */
        itemIds: string;
    } | {
        /** 並び順 */
        orderBy?: OrderByType;
        /** 取得上限数 */
        limit?: number;
        /** 前回検索時最後の主キー */
        lastEvaluatedKey?: LastEvaluatedKey;
    };
};
export type GetPublicItemMetadataListResult<T extends ItemType = ItemType> = ApiResultBase<ItemMetadata<T>[]>;
