import { ItemId, ItemMetadata, ItemType } from '../../item/common';
import { ApiResultBase } from '../common';

export type GetItemMetadataListRequest<T extends ItemType = ItemType> = {
  /** パスパラメータ */
  params: {
    /** アイテム種別 */
    itemType: T;
  };
  /** クエリパラメータ */
  query: {
    /** 取得するItemIDのリスト */
    itemIds: ItemId[];
  };
};

export type GetItemMetadataListResult<T extends ItemType = ItemType> =
  ApiResultBase<ItemMetadata<T>[]>;
