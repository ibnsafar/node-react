const Pool = require('pg').Pool

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'node-article',
    password: 'po12',
    port: 5432,
})