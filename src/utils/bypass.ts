const bypass =
  <PreviousOk, PreviousNg extends Failure, NextOk, NextNg extends Failure>(
    func: (i: PreviousOk) => Result<NextOk, NextNg>
  ): ((
    input: Result<PreviousOk, PreviousNg>
  ) => Result<NextOk, PreviousNg | NextNg>) =>
  (input) =>
    input.success ? func(input.data) : input;
