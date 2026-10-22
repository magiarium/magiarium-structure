/** yyyyMMddHHmmss形式文字列 */
export type DateTimeString =
  `${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}`;

/** 画像のメタデータ */
export type ImageMetadata = {
  /** 画像のパス */
  path: string;
  /** 画像のMIMEタイプ */
  mimeType: string;
  /** 代替テキスト */
  alt: string;
  /** 画像のファイル名 */
  fileName: string;
  /** 画像サイズ */
  size: {
    /** 高さ */
    height: number;
    /** 幅 */
    width: number;
  };
  /** アップロード日次 */
  uploadedAt: DateTimeString;
};
