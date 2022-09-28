import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "graphql",
    username: "root",
    password: "password",
    logging: true,
    synchronize: false,
    entities: [],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  // app.use("/graphql", graphqlHTTP({
  //     schema,
  //     graphiql: true
  // }))

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log("SEVER RUNNING ON PORT 3001");
  });
};

main().catch((error) => {
  console.log(error);
});
