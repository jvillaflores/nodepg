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

pool.query(`SELECT pet_name, family, pets.owner_id, name
FROM "midterm-act2".pets
LEFT JOIN "midterm-act2".owners
ON pets.owner_id = owners.owner_id 
WHERE pets.owner_id IS NULL`,(error,results)=> {
    if(error){
        throw error
    }
    console.log(results.rows)
    
})

