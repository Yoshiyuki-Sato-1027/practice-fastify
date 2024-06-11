import fastify from "fastify";

const server = fastify({
  logger: true,
});
const start = async () => {
  try {
    await server.listen({ port: 3001 }, (err, address) => {
      if (err) throw err;
    });
  } catch (err) {
    server.log.error(err);
  }
};

server.get("/", async (request, reply) => {
  return { hello: "world" };
});

start();
