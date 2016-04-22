import debug from "debug";
import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLID,
} from "graphql";

import { Blog } from "./blog";
import { Post, Posts } from "./post";
import { Comment, Comments } from "./comment";

const log = debug("server:schema");

const blogs = {
    "b1": {
        id: "b1",
        title: "Beep boop"
    }
};

const posts = {
    "p1": {
        id: "p1",
        published: String(Date.now() - 7200),
        title: "Lorem ipsum post 1 title",
        content: "Dolor sit amet post 1 content"
    },
    "p2": {
        id: "p2",
        published: String(Date.now() - 3600),
        title: "Lorem ipsum post 2 title",
        content: "Dolor sit amet post 2 content"
    },
};

const comments = {
    "c1": {
        id: "c1",
        postId: "p1",
        posted: String(Date.now()),
        from: "John Smith",
        content: "Lorem ipsum comment"
    }
};

const Query = new GraphQLObjectType({
    name: "Query",
    fields: {
        blog: {
            type: Blog,
            resolve: () => ({ ...blogs["b1"], posts: Object.values(posts) })
        },
        post: {
            type: Post,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve: (_, args) => posts[args.id]
        },
        posts: {
            type: Posts,
            resolve: () => Object.values(posts)
        },
        comment: {
            type: Comment,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve: (_, args) => comments[args.id]
        },
        comments: {
            type: Comments,
            args: {
                post: {
                    type: GraphQLID
                }
            },
            resolve: (_, args) => Object.values(comments).filter((c) => c.postId == args.post)
        }
    }
});

export const Schema = new GraphQLSchema({
    query: Query
});

export { Schema as default };
