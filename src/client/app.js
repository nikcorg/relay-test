import debug from "debug";
import React from "react";
import ReactDOM from "react-dom";
import { mount } from "../containers/root";
import Home from "../containers/home";

const log = debug("client:init");

export const init = () => {
    log("app started");
    mount(document.querySelector("#root"));
};
