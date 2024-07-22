export type Brand<K, T> = K & { __brand: T };

// 型を作る関数
export const CreateBrandType = <K, T>(value: K): Brand<K, T> => {
  return value as Brand<K, T>;
};
