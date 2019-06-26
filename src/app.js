import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

import { routes } from "./routes";
import globalRouter from "./routers/globalRouter";
import documentRouter from "./routers/documentRouter";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes.home, globalRouter);
app.use(routes.documents, documentRouter);

export default app;
