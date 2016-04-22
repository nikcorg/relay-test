import React from "react";
import Relay from "react-relay";

export const Blog =
    ({ blog: { title }, children }) => (
        <div>
            <h1>{title}</h1>
            <main>
            {children}
            </main>
        </div>
    );

export const BlogContainer = Relay.createContainer(Blog, {
    fragments: {
        blog: () => Relay.QL`fragment on Blog { title }`
    }
});

export { BlogContainer as default };
