import fastify from "fastify";
import { Brand, CreateBrandTypeValue } from "./utils/createBrand";

type UserId = Brand<string, "UserId">;
const userId: UserId = CreateBrandTypeValue<string, "UserId">("userId");
console.log("userId", userId);

// ユーザ情報を定義する
type UserInfo = { userId: string; name: string };
// ブランド型のユーザ情報を定義する
type BrandUserInfo = Brand<UserInfo, "UserInfo">;

const userInfo: BrandUserInfo = CreateBrandTypeValue<
  UserInfo, // 型を定義
  "UserInfo" // 型名を定義
>(
  {
    userId: "abcdefg",
    name: "john",
  } // 値を定義
);
console.log("userInfo", userInfo);

const server = fastify();
const opts = {
  schema: {
    response: {
      200: {
        type: "object",
        required: ["value", "code"], // 必須項目
        properties: {
          value: { type: "string" }, // 型の指定
          code: { type: "number" }, // 型の指定
        },
      },
    },
  },
};
// 型と違うものを送ると500エラー
server.get("/users", opts, function (req, rep) {
  rep.send({
    value: "hoge",
    code: 123,
  });
});

server.get("/", opts, async (request, reply) => {
  return "handleUpdateUser();";
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
