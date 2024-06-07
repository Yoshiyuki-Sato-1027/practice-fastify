import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

fastify.get("/apple", async (request, reply) => {
  return { apple: "apple" };
});

fastify.listen({ port: 3001 }, (err, address) => {
  if (err) throw err;
});
