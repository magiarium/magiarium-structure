import { ItemData, ItemId, ItemType } from '../../item';
import { ApiResultBase } from '../common';

/** 下書きアイテム取得処理リクエスト */
export type GetDraftItemDataRequest<T extends ItemType = ItemType> = {
  /** パスパラメータ */
  params: {
    /** アイテムID */
    itemId: ItemId;
    /** アイテム種別 */
    itemType: T;
  };
};

/** 下書きアイテム取得処理結果 */
export type GetDraftItemDataResult<T extends ItemType = ItemType> =
  ApiResultBase<ItemData<T>>;
