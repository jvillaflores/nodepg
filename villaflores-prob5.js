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

pool.query(`SELECT *
FROM "midterm-act2".owners 
INNER JOIN "midterm-act2".pets
ON "midterm-act2".owners.owner_id = "midterm-act2".pets.owner_id
WHERE "midterm-act2".owners.gender = 'Male'`,(error,results)=> {
    if(error){
        throw error
    }
    console.log(results.rows)
    
})

