const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors({origin: 'http://localhost:3000'}))
const port = 8000;
// to connect to db
require('../../productMangerI/server/config/mongoose.config')
// allow as to use post request and poss to it
app.use(express.json(),express.urlencoded({extended: true}))

// allow to access to all our routes 
const allMyProductRoute = require('../../productMangerI/server/routes/product.route')
allMyProductRoute(app)

 app.listen(port, ()=> console.log(`Example app listening at http://localhost:${port}`))





