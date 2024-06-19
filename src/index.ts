import fastify from "fastify";

const server = fastify();
const opts = {
  schema: {
    response: {
      200: {
        type: "object",
        required: ["value", "code"],
        properties: {
          value: { type: "string" },
          code: { type: "number" },
        },
      },
    },
  },
};
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
