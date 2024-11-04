import sql from 'mssql';
import config from '../config';
import {Buffer} from 'buffer';
Buffer.from('anything','base64');
const dbSettings = {
    user: config.dbUser, 
    password: config.dbpassword,
    server: config.dbServer,
    database: config.dbDatabase,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    UseCreateIndex: true,
    options: {
        encrypt: true, 
        trustServerCertificate: true, 
    }
};

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error);
    }
};

export { sql };