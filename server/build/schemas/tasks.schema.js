"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const tasksSchema = joi_1.default.object({
    task: joi_1.default.string().required(),
    image: joi_1.default.string().required(),
    priority: joi_1.default.string().required(),
    deadline: joi_1.default.string().required()
});
exports.default = tasksSchema;
