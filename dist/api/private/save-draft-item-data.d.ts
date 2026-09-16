import { ItemData, ItemId, ItemType } from '../../item/common';
import { ApiResultBase } from '../common';
export type SaveDraftItemDataRequest = {
    /** パスパラメータ */
    params: {
        /** アイテムID */
        itemId: ItemId;
        /** アイテム種別 */
        itemType: ItemType;
    };
    /** ボディ */
    body: ItemData;
};
/** 下書きアイテム公開結果 */
export type SaveDraftItemDataResult = ApiResultBase<undefined>;
