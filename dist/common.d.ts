/** yyyyMMddHHmmss形式文字列 */
export type DateTimeString = `${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}`;
/** 画像のメタデータ */
export type ImageMetadata = {
    /** 相対パス */
    src: string;
    /** タイトル */
    title?: string;
    /** 代替テキスト */
    alt?: string;
    /** 画像の原寸（高さ） */
    originalHeight: number;
    /** 画像の原寸（横幅） */
    originalWidth: number;
    /** アップロード日 */
    uploadedAt: DateTimeString;
};
