import { config } from "dotenv"
config();

// variables de entorno para diferentes configuraciones 
export default {
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || '',
    dbpassword: process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    dbDatabase: process.env.DB_DATABASE || '',
    SECRET: 'sable-api'
};

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/usuarios";

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "agustinbressan@gmail.com";
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin2";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
