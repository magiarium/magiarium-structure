import { DateTimeString } from '../common';
import { BlogItemContent, BlogItemData, BlogItemMetadata } from './blog';

/** アイテムID */
export const ITEM_ID_PATTERN = /^\d{14}$/;
export type ItemId = DateTimeString;

/** アイテム種別 */
export const ITEM_TYPE = ['blog'] as const;
export type ItemType = (typeof ITEM_TYPE)[number];

/** アイテム状態 */
export const ITEM_STATE = ['draft', 'public'] as const;
export type ItemState = (typeof ITEM_STATE)[number];

/** アイテムデータ */
export type ItemData<T extends ItemType = ItemType> = { blog: BlogItemData }[T];

/** アイテムメタデータ */
export type ItemMetadata<T extends ItemType = ItemType> = {
  blog: BlogItemMetadata;
}[T];

/** アイテムコンテンツ */
export type ItemContent<T extends ItemType = ItemType> = {
  blog: BlogItemContent;
}[T];
