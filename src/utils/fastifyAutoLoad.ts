import type { FastifyInstance } from "fastify";
import { join } from "path";

export default async (fastify: FastifyInstance) => {
  await fastify.register(autoLoad, {
    dir: join(__dirname, "../routes/"),
    routeParams: true,
    matchFilter: (path: string) =>
      path.split("/").at(-1)?.split(".").at(-2) === "_handlers",
  });
};
