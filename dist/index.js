"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const BookiesRoutes_1 = require("./routes/BookiesRoutes");
const GametypeRoutes_1 = require("./routes/GametypeRoutes");
const BookiesMarketsRoutes_1 = require("./routes/BookiesMarketsRoutes");
const OfferingsRoutes_1 = require("./routes/OfferingsRoutes");
const router = (0, express_1.default)();
router.use((0, morgan_1.default)("dev"));
// for request parsing
router.use(express_1.default.urlencoded({ extended: false }));
// for properly parsing json
router.use(express_1.default.json());
router.use((req, res, next) => {
    // set the CORS policy
    res.header("Access-Control-Allow-Origin", "*");
    // set the CORS headers
    res.header("Access-Control-Allow-Headers", "origin, X-Requested-With,Content-Type,Accept, Authorization");
    // set the CORS method headers
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
        return res.status(200).json({});
    }
    next();
});
/** Available Routes */
router.use("/bookies", BookiesRoutes_1.BookiesRouter);
router.use("/gametype", GametypeRoutes_1.GametypesRouter);
router.use("/markets", BookiesMarketsRoutes_1.BookiesMarketsRouter);
router.use("/offerings", OfferingsRoutes_1.OfferingsRouter);
// Error handler
router.use((req, res, next) => {
    const error = new Error("Does not exist.");
    return res.status(404).json({
        message: error.message,
    });
});
// Starting server
const server = http_1.default.createServer(router);
const PORT = process.env.PORT;
server.listen(PORT, () => console.log("Server Started on Port: " + PORT));
