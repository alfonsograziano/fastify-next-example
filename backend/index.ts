import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { writeFileSync } from "fs";

const server = fastify();

await server.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Test swagger",
      description: "Testing the Fastify swagger API",
      version: "0.1.0",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
  },
});

await server.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

server.get("/", {
  schema: {
    tags: ["Default"],
    response: {
      200: {
        type: "object",
        properties: {
          anything: { type: "string" },
        },
      },
    },
  },
  handler: (req, res) => {
    res.send({ anything: "meaningfull" });
  },
});

server.put(
  "/some-route/:id",
  {
    schema: {
      description: "post some data",
      tags: ["user", "code"],
      summary: "qwerty",
      params: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "user id",
          },
        },
      },
      body: {
        type: "object",
        properties: {
          hello: { type: "string" },
          obj: {
            type: "object",
            properties: {
              some: { type: "string" },
            },
          },
        },
      },
      response: {
        201: {
          description: "Successful response",
          type: "object",
          properties: {
            hello: { type: "string" },
          },
        },
        default: {
          description: "Default response",
          type: "object",
          properties: {
            foo: { type: "string" },
          },
        },
      },
    },
  },
  (req, reply) => {
    reply.code(201).send({ hello: "world" });
  }
);

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

await server.ready();

// after the ready or listen call
const yaml = server.swagger({ yaml: true });
writeFileSync("./swagger.yml", yaml);
