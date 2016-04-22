import React from "react";
import Relay from "react-relay";

export const Post = ({ post: { title, content } }) => (
    <article>
        <h2>{title}</h2>
        <p>{content}</p>
    </article>
);

export const PostContainer = Relay.createContainer(Post, {
    fragments: {
        post: () => Relay.QL`fragment on Post { title, content }`
    }
});

export { PostContainer as default };
