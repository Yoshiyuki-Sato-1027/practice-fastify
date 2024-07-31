import fastify from "fastify";

const server = fastify();
server.get("/", function (req, rep) {
  rep.send({
    value: "hoge",
    code: 123,
  });
});
