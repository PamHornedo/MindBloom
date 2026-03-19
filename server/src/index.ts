import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./schema/resolvers";
import { connectDB } from "./config/db";
import { context } from "./context/context";

dotenv.config();

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  await connectDB();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server),
    bodyParser.json(),
  );

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}/graphql`),
  );
}

startServer();
