import type { JSONContent } from '@tiptap/core';
import { DateTimeString, ImageMetadata } from '../common';
import { ItemId, ItemState, ItemType } from './common';
export type BlogItemData = BlogItemMetadata & BlogItemContent;
export type BlogItemMetadata = {
    /** アイテムID */
    itemId: ItemId;
    /** アイテム種別 */
    itemType: Extract<ItemType, 'blog'>;
    /** アイテム状態 */
    itemState: ItemState;
    /** ページタイトル */
    title: string;
    /** ページ説明 */
    description: string;
    /** 検索条件 */
    searchKey: BlogItemSearchField;
    /** サムネイル画像情報 */
    thumbnailImage: ImageMetadata;
    /** OGP画像情報 */
    ogpImage: ImageMetadata;
    /** 作成日時 */
    createdAt: DateTimeString;
    /** 更新日時 */
    updatedAt: DateTimeString;
    /** 公開日時 */
    publishedAt: DateTimeString;
    /** 閲覧数 */
    viewCount: number;
};
/** 検索キー */
export type BlogItemSearchField = {
    /** カテゴリ(単一指定のみ) */
    category: string[];
    /** タグ */
    tag: string[];
};
/** アイテムコンテンツ */
export type BlogItemContent = {
    /** コンテンツ */
    content: JSONContent;
};
