const express = require("express")
const app = express();
const cors = require("cors")
const productRoutes = require("./routes/productRoutes") 
const {errorMiddleware} = require("./middleware/error")
app.use(express.json())
app.use(cors())

app.use("/productApi", productRoutes)
//   /productApi/:id

app.use(errorMiddleware)

app.listen(3000)