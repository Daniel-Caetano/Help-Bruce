const express = require("express");

const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const commentRouter = require("./routes/commentRoutes");

const handleError = require("./middlewares/handleError");

const db = require("./database");

const app = express();

//verificando se há conexão
db.hasConnection();

app.use(express.json());

app.use(authRouter);
app.use(userRouter);
app.use(postRouter);
app.use(commentRouter);

app.use(handleError);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
