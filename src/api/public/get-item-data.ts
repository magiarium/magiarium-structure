import { ItemData, ItemId, ItemType } from '../../item/common';
import { ApiResponseBase } from '../common';

export type GetItemDataRequest<T extends ItemType = ItemType> = {
  /** パスパラメータ */
  params: {
    itemId: ItemId;
    /** アイテム種別 */
    itemType: T;
  };
};

export type GetItemDataResponse<T extends ItemType = ItemType> =
  ApiResponseBase<ItemData<T>>;
