import express, {Request,Response,NextFunction} from "express";

import "express-async-errors"
import "reflect-metadata";
import "./database/Index";
const cors = require("cors");


import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message,
        });

    }
    return response.status(500).json({
        status:"error",
        message:"internal server error",
    });
})
console.log("Inicializando");
app.listen(3000);