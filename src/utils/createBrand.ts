// ブランド型を定義する汎用的な型
export type Brand<K, T> = K & { __brand: T };

// ブランド型の値を作る汎用的な関数
export const CreateBrandTypeValue = <K, T>(value: K): Brand<K, T> => {
  return value as Brand<K, T>;
};
