import React from "react";
import {
    IndexRoute,
    Route,
} from 'react-router';
import {
    BlogQuery,
    SinglePostQuery
} from "../../queries";

// Containers
import Blog from "../blog";
import Home from "../home";
import Post from "../post";

export default (
    <Route path="/" component={Blog} queries={BlogQuery}>
        <IndexRoute component={Home} queries={BlogQuery} />
        <Route path="/post/:id" component={Post} queries={SinglePostQuery} />
    </Route>
);
