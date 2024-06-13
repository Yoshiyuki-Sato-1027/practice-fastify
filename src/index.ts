import fastify from "fastify";
import { pipe } from "ramda";
import { bypass } from "./utils/bypass";
import { Result } from "./types/Result";
import { match } from "ts-pattern";

const handleTest = (): Result<{ data: string }, { errorCode: number }> => {
  return { success: true, data: { data: "" } };
};

function handleUpdateUser(): void {
  pipe(bypass(handleTest));
}

const server = fastify();

server.get("/", async (request, reply) => {
  return "hello world";
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
