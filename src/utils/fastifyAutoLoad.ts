import fastifyAutoload from "@fastify/autoload";
import type { FastifyInstance } from "fastify";
import { join } from "path";

export default async (fastify: FastifyInstance) => {
  await fastify.register(fastifyAutoload, {
    dir: join(__dirname, "../routes/"),
    routeParams: true,
    matchFilter: (path: string) =>
      path.split("/").at(-1)?.split(".").at(-2) === "_handlers",
  });
};
