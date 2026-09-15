import { ItemMetadata, ItemType } from '../../item/common';
import { ApiResponseBase } from '../common';

// リクエストパラメータはなし
export type GetDraftItemMetadataListRequest<T extends ItemType = ItemType> = {
  /** パスパラメータ */
  params: {
    /** アイテム種別 */
    itemType: T;
  };
};

/** 下書きメタデータ一覧取得レスポンス */
export type GetDraftItemMetadataListResponse<T extends ItemType = ItemType> =
  ApiResponseBase<ItemMetadata<T>[]>;
