import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_DB_HOST,
    port: +(<string>process.env.POSTGRES_DB_PORT),
    username: process.env.POSTGRES_DB_USER,
    password: process.env.POSTGRES_DB_PASSWORD,
    database: process.env.POSTGRES_DB_NAME,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    migrations: [__dirname + '/migrations/*.ts'],
    synchronize: false,  // Ensure migrations are used instead of auto-sync
    logging: true,
});
