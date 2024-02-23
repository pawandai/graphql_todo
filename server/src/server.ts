import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from "mongoose"
import {schema} from "./schema/typeDefs";
import {createHandler} from "graphql-http"

const databaseUrl = process.env.DATABASE_URL


const app = express()
app.use(express.json())
app.use(cors())
const port = Number(process.env.PORT) || 3000

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})
mongoose.connect(databaseUrl as string, {
    dbName: "Database"
}).then(() => console.log("Successfully connected to database"))

app.all('/graphql', createHandler({schema}))

