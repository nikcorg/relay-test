import Relay from 'react-relay';

export const BlogQuery = {
    blog: () => Relay.QL`query { blog }`
};

// export const PostsQuery = {
//     posts: () => Relay.QL`query { posts }`
// };

export const SinglePostQuery = {
    post: () => Relay.QL`query { post(id: $id ) }`
};
