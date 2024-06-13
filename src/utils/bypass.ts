import { Failure } from "../types/Failure";
import { Result } from "../types/Result";

export function bypass<
  PreviousOk,
  PreviousNg extends Failure,
  NextOk,
  NextNg extends Failure
>(
  func: (i: PreviousOk) => Result<NextOk, NextNg> // 引数はオリジナルのサブ関数
): (
  input: Result<PreviousOk, PreviousNg>
) => Result<NextOk, PreviousNg | NextNg> {
  return (input) => (input.success ? func(input.data) : input);
}
