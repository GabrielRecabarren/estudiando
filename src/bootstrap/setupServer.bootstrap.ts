import {Application, json, urlencoded, Request, Response, NextFunction} from "express";
import http from 'http';
import Logger from "bunyan";
import { logger } from "../configs/configLogs";
import { config } from "../configs/configEnvs";

const log: Logger = logger.createLogger('server');

export class EjercicioServer{

    private app: Application;

    constructor(app: Application){
        this.app = app;

    }

    public start(): void {
        this.startServer(this.app);
    }

    private async startServer(app: Application): Promise<void> {

        try{
            const httpServer: http.Server = new http.Server(app);
            this.startHttpServer(httpServer);
        }catch(err){
            log.error(err);
        }
    }
    private startHttpServer(httpServer:http.Server): void {
        log.info(`Server has started with process ${process.pid}`);
        const PORT = Number(config.SERVER_PORT);
        httpServer.listen(PORT, () => {
            log.info(`Server is running on port ${PORT}`);
        });
    }
}
