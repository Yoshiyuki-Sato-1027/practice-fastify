import fastify from "fastify";
import { JSONSchema } from "json-schema-to-ts";

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
} as const satisfies JSONSchema;
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
