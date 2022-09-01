"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookie = exports.getAllBookies = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllBookies = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const bookies = yield prisma.bookies.findMany();
    console.log(bookies);
    return res.status(200).json({
        bookies,
    });
});
exports.getAllBookies = getAllBookies;
const getBookie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const bookie = yield prisma.bookies.findUnique({
        where: {
            id: Number(req.params.id),
        },
    });
    return res.status(200).json({
        bookie,
    });
});
exports.getBookie = getBookie;
