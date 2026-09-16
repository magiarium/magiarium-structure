import { ItemMetadata, ItemType } from '../../item/common';
import { ApiResultBase } from '../common';

// リクエストパラメータはなし
export type GetDraftItemMetadataListRequest<T extends ItemType = ItemType> = {
  /** パスパラメータ */
  params: {
    /** アイテム種別 */
    itemType: T;
  };
};

/** 下書きメタデータ一覧取得結果 */
export type GetDraftItemMetadataListResult<T extends ItemType = ItemType> =
  ApiResultBase<ItemMetadata<T>[]>;
