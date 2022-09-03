import http from "http";
import express, { Express } from "express";
import morgan from "morgan";
import { BookiesRouter } from "./routes/BookiesRoutes";
import { GametypesRouter } from "./routes/GametypeRoutes";
import { BookiesMarketsRouter } from "./routes/BookiesMarketsRoutes";
import { OfferingsRouter } from "./routes/OfferingsRoutes";
import { TopRouter } from "./routes/TopRouter";

const router: Express = express();

router.use(morgan("dev"));
// for request parsing
router.use(express.urlencoded({ extended: false }));
// for properly parsing json
router.use(express.json());

router.use((req, res, next) => {
  // set the CORS policy
  res.header("Access-Control-Allow-Origin", "*");
  // set the CORS headers
  res.header(
    "Access-Control-Allow-Headers",
    "origin, X-Requested-With,Content-Type,Accept, Authorization"
  );
  // set the CORS method headers
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
    return res.status(200).json({});
  }
  next();
});

/** Available Routes */
router.use("/bookies", BookiesRouter);
router.use("/gametype", GametypesRouter);
router.use("/markets", BookiesMarketsRouter);
router.use("/offerings", OfferingsRouter);
router.use("/top", TopRouter);

// Error handler

router.use((req, res, next) => {
  const error = new Error("Does not exist.");
  return res.status(404).json({
    message: error.message,
  });
});

// Starting server

const server = http.createServer(router);
const PORT: any = process.env.PORT;
server.listen(PORT, () => console.log("Server Started on Port: " + PORT));
