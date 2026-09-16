import { ItemId, ItemType } from '../../item/common';
import { ApiResultBase } from '../common';

export type PublishDraftItemDataRequest = {
  /** パスパラメータ */
  params: {
    /** アイテムID */
    itemId: ItemId;
    /** アイテム種別 */
    itemType: ItemType;
  };
};

/** 下書きアイテム公開結果 */
export type PublishDraftItemDataResult = ApiResultBase<undefined>;
