import {
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from "graphql";

export const Post = new GraphQLObjectType({
    name: "Post",
    fields: {
        id: { type: GraphQLID },
        published: { type: GraphQLString },
        title: { type: GraphQLString },
        content: { type: GraphQLString }
    }
});

export const Posts = new GraphQLList(Post);
