"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRoute = void 0;
const rootRoute = (req, Res) => {
    Res.json({ message: "Welcome to Tasks API" });
};
exports.rootRoute = rootRoute;
