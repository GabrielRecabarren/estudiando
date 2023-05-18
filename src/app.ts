import express, { Express} from 'express';
import { EjercicioServer } from './bootstrap/setupServer.bootstrap';
import databaseConnection from './bootstrap/setupDatabase.bootstrap'
import { config } from './configs/configEnvs';



class Application {
    public initialize(): void {
        this.loadConfig();
        databaseConnection();
        const app: Express = express();
        const server: EjercicioServer = new EjercicioServer(app);
        server.start();
    }

    private loadConfig(): void {
        config.validateConfig();
    }

}
//No olvidar iniciar la app, para no sufrir
const application: Application = new Application();
application.initialize();