const {Pool} = require('pg')
require('dotenv').config()
const pool = new Pool({
    user:`${process.env.DB_USER}`,
    host:`${process.env.DB_HOST}`,
    database:`${process.env.DB_DATABASE}`,
    password:`${process.env.DB_PASSWORD}`,
    port: process.env.DB_PORT,
    ssl:true,
})

pool.query(`SELECT name,occupation,class 
FROM "midterm-act2".pets 
INNER JOIN "midterm-act2".owners
ON "midterm-act2".owners.owner_id = "midterm-act2".pets.owner_id
WHERE "midterm-act2".pets.class = 'Bird'`,(error,results)=> {
    if(error){
        throw error
    }
    console.log(results.rows)
    
})

