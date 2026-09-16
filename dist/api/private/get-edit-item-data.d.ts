import { ItemData, ItemId, ItemState, ItemType } from '../../item';
import { ApiResultBase } from '../common';
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
/** 編集アイテム取得処理結果 */
export type GetEditItemDataResult<T extends ItemType = ItemType> = ApiResultBase<ItemData<T>>;
