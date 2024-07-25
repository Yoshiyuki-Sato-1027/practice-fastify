import { FastifyReply } from "fastify";

// エラーのステータスコードをあるだけ定義
type ErrorStatusCode =
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 418
  | 421
  | 422
  | 423
  | 424
  | 426
  | 427
  | 428
  | 429
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 510
  | 511;

// エラーメッセージのレスポンスを返す関数
// グローバルに使えそう
const sendErrorResponse = <
  T extends ErrorStatusCode,
  K extends Record<string, string> | undefined
>({
  reply,
  errorCode,
  error,
}: {
  reply: FastifyReply;
  errorCode: T;
  error?: K;
}): FastifyReply => {
  // ステータスコードあるだけ定義する
  const errorMessages: { [key: number]: string } = {
    400: "Bad Request",
    401: "Not Authentication",
    404: "Not Found",
    409: "Password Conflict",
    500: "Internal Server Error",
  };

  // errorはerror内容以外で渡したいものを定義するため、オプショナルにしている
  // 上記を追加することにより同じ500エラーでも{error: 'Internal Server Error',detail: prisma error}みたいなことができる
  return reply
    .code(errorCode as number)
    .send({ error: errorMessages[errorCode], ...error });
};
