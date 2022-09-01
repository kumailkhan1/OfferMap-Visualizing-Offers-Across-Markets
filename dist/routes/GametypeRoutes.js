"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GametypesRouter = void 0;
const express_1 = __importDefault(require("express"));
const gametype_1 = require("../controllers/gametype");
exports.GametypesRouter = express_1.default.Router();
exports.GametypesRouter.get("/", gametype_1.getAllGametypes);
exports.GametypesRouter.get("/:id", gametype_1.getGametype);
