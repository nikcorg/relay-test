import React from "react";
import Relay from "react-relay";
import { Link } from "react-router";

export const Home =
    ({ blog: { posts } }) => (
        <ul>
            {Object.values(posts).map(({ id, title }) => (
                <li key={id}><Link to={`/post/${id}`}>{title}</Link></li>
            ))}
        </ul>
    );

// export { Home as default };

export const HomeContainer = Relay.createContainer(Home, {
    fragments: {
        blog: () => Relay.QL`fragment on Blog { posts { id, title } }`
    }
});

export { HomeContainer as default };
