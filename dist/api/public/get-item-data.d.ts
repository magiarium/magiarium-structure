import { ItemData, ItemId, ItemType } from '../../item/common';
import { ApiResultBase } from '../common';
export type GetPublicItemDataRequest<T extends ItemType = ItemType> = {
    /** パスパラメータ */
    params: {
        itemId: ItemId;
        /** アイテム種別 */
        itemType: T;
    };
};
export type GetPublicItemDataResult<T extends ItemType = ItemType> = ApiResultBase<ItemData<T>>;
