import { ItemData, ItemId, ItemState, ItemType } from '../../item';
import { ApiResponseBase } from '../common';
/** 編集アイテム取得処理リクエスト */
export type GetEditItemDataRequest<T extends ItemType = ItemType> = {
    /** パスパラメータ */
    params: {
        /** アイテムID */
        itemId: ItemId;
        /** アイテム種別 */
        itemType: T;
        /** アイテム状態 */
        itemState: ItemState;
    };
};
/** 編集アイテム取得処理レスポンス */
export type GetEditItemDataResponse<T extends ItemType = ItemType> = ApiResponseBase<ItemData<T>>;
