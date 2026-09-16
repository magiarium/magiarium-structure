import { ItemData, ItemId, ItemType } from '../../item/common';
import { ApiResultBase } from '../common';
export type GetItemDataRequest<T extends ItemType = ItemType> = {
    /** パスパラメータ */
    params: {
        itemId: ItemId;
        /** アイテム種別 */
        itemType: T;
    };
};
export type GetItemDataResult<T extends ItemType = ItemType> = ApiResultBase<ItemData<T>>;
