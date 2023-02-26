const express = require("express");
const PORT = 1600;
const cors = require("cors");
const db = require("./src/utils/database");
//const db = require("./src/utils/database.js");
const {todoRouter} = require("./src/routes/todo.routes")

const app = express();


app.use(cors());
app.use(express.json());
app.use(todoRouter);

db.authenticate()
  .then(() => console.log("Successful Auth"))
  .catch((error) => console.error(error)); 

db.sync()
.then(() => console.log("base de datos sincronizada"))
.catch((error) => console.log(error))

app.listen(PORT, () => {
    console.log(`servidor escuchando en el Puerto ${PORT}`)
})
