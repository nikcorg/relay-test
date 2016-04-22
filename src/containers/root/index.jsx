import React from "react";
import ReactDOM from "react-dom";
import {
    hashHistory,
    applyRouterMiddleware,
    useRouterHistory,
    Router
} from 'react-router';
import useRelay from 'react-router-relay';
import routes from "./routes";

export const mount =
    (node) => ReactDOM.render(<Router
            render={applyRouterMiddleware(useRelay)}
            history={hashHistory}
            routes={routes}
        />, node);
