"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootSignUp = exports.rootSignIn = void 0;
const rootSignIn = (req, res) => {
    res.send('Hola from Sign In');
};
exports.rootSignIn = rootSignIn;
const rootSignUp = (req, res) => {
    res.send('Hola from Sign Up');
};
exports.rootSignUp = rootSignUp;
