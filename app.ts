import express from "express";
import bodyParser from "body-parser";

const app = express();

import todoRoutes from "./routes/todos";

app.use(bodyParser.json());

app.use(todoRoutes);

app.listen(3000);
