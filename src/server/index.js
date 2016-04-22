import debug from "debug";
import graphqlHTTP from "express-graphql";
import express from "express";
import schema from "../schema";

const log = debug("server:init");

const start = (port = 3000, cb = () => log(`Express server listening on port ${port}`)) =>
    express().
        use(express.static("./static")).
        use("/graphql", graphqlHTTP({ pretty: true, schema })).
        listen(port, cb);

start(process.env.PORT);
