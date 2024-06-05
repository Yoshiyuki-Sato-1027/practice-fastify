import fastify from "fastify";

const fas = fastify({
  logger: true,
});

fas.get("/", async (request, reply) => {
  reply.type("application/json").code(200);
  return { hello: "world" };
});

fas.listen({ port: 3001 }, (err, address) => {
  if (err) throw err;
  // Server is now listening on ${address}
});
