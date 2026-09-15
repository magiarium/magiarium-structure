import { ItemData, ItemId, ItemType } from '../../item/common';
import { ApiResponseBase } from '../common';

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

/** 下書きアイテム公開レスポンス */
export type SaveDraftItemDataResponse = ApiResponseBase<undefined>;
