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

pool.query(`SELECT name, gender, pet_name, family, class
FROM "midterm-act2".pets
LEFT JOIN "midterm-act2".owners
ON "midterm-act2".pets.owner_id = "midterm-act2".owners.owner_id 
WHERE "midterm-act2".owners.gender = 'Female' OR "midterm-act2".pets.class ='Reptile'`,(error,results)=> {
    if(error){
        throw error
    }
    console.log(results.rows)
    
})

