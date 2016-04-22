import {
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from "graphql";

import { Posts } from "./post";

export const Blog = new GraphQLObjectType({
    name: "Blog",
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        posts: { type: Posts }
    }
});
