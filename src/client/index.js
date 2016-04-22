import debug from "debug";
import { basename } from "path";
import { init } from "./app";

const debugMask = process.env.DEBUG || "*";

if ("production" !== process.env.NODE_ENV) {
    debug.enable(debugMask);
}

const domready = (f) => {
    if ("undefined" === typeof document) {
        throw new Error(basename(__filename) + " is browser only");
    }

    if (/interactive|complete/.test(document.readyState)) {
        f();
    } else {
        document.addEventListener("DOMContentLoaded", f);
    }
};

domready(init);
