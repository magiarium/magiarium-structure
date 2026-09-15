import { DateTimeString } from '../common';
import { BlogItemContent, BlogItemData, BlogItemMetadata } from './blog';
/** アイテムID */
export type ItemId = DateTimeString;
/** アイテム種別 */
export declare const ITEM_TYPE: readonly ["blog"];
export type ItemType = (typeof ITEM_TYPE)[number];
/** アイテム状態 */
export declare const ITEM_STATE: readonly ["draft", "public"];
export type ItemState = (typeof ITEM_STATE)[number];
/** アイテムデータ */
export type ItemData<T extends ItemType = ItemType> = {
    blog: BlogItemData;
}[T];
/** アイテムメタデータ */
export type ItemMetadata<T extends ItemType = ItemType> = {
    blog: BlogItemMetadata;
}[T];
/** アイテムコンテンツ */
export type ItemContent<T extends ItemType = ItemType> = {
    blog: BlogItemContent;
}[T];
