import { ItemId, ItemType } from '../../item/common';
import { ApiResultBase } from '../common';
export type DeleteDraftItemDataRequest = {
    /** パスパラメータ */
    params: {
        /** アイテムID */
        itemId: ItemId;
        /** アイテム種別 */
        itemType: ItemType;
    };
};
/** 下書きアイテム削除レスポンス */
export type DeleteDraftItemDataResult = ApiResultBase<undefined>;
