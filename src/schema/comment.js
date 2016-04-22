import {
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from "graphql";

export const Comment = new GraphQLObjectType({
    name: "Comment",
    fields: {
        id: { type: GraphQLID },
        postId: { type: GraphQLID },
        from: { type: GraphQLString },
        content: { type: GraphQLString },
        posted: { type: GraphQLString }
    }
});

export const Comments = new GraphQLList(Comment);
