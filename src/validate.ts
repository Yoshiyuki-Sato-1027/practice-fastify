import { Result } from "./types/Result";

/**
 * 2. パラメータをバリデートするサブ関数
 */
export const validateName = (args: {
  id: number;
  name: string;
}): Result<{ id: number; name: string }, { errorCode: 100 }> => {
  return args.name !== ""
    ? { success: true, data: args }
    : { success: false, error: { errorCode: 100 } };
};
