import "reflect-metadata";
import app from "./config/express";
import startApollo from "./config/apollo";

const startServer = async (): Promise<void> => {
  const apollo = await startApollo();

  apollo.applyMiddleware({ app });

  app.listen(
    {
      port: 4000,
    },
    () => console.log(`Server started successfully on port 4000/graphql`)
  );
};

startServer();
