const express= require('express');
const cors = require("cors");
const routes = require("./router/xumm")
const port = process.env.PORT || 4040;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", routes);


app.listen(port, () => console.log(`Server is listening on port ${port}...`));

