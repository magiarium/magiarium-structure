import { ItemId, ItemType } from '../../item/common';
import { ApiResponseBase } from '../common';

export type PublishDraftItemDataRequest = {
  /** パスパラメータ */
  params: {
    /** アイテムID */
    itemId: ItemId;
    /** アイテム種別 */
    itemType: ItemType;
  };
};

/** 下書きアイテム公開レスポンス */
export type PublishDraftItemDataResponse = ApiResponseBase<undefined>;
