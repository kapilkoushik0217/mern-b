require("dotenv").config();
const express = require("express");
const server = express();
const mongoose = require("mongoose");
const { createProduct } = require("./controller/ProductCtrl");
const productsRouter = require("./routes/Products");
const categoriesRouter = require("./routes/Categories");
const brandsRouter = require("./routes/Brands");
const usersRouter = require("./routes/Users");
const authRouter = require("./routes/Auth");
const cartRouter = require("./routes/Cart");
const ordersRouter = require("./routes/Orders");

const cors = require("cors");

// middlewares

server.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
server.use(express.json()); // to parse req.body
server.use("/products", productsRouter.router);
server.use("/categories", categoriesRouter.router);
server.use("/brands", brandsRouter.router);
server.use('/users', usersRouter.router);
server.use('/auth', authRouter.router);
server.use('/cart', cartRouter.router);
server.use('/orders', ordersRouter.router);
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("database connected to MONGODB ATLAS");
}

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

server.listen(4339, () => {
  console.log("server started on port 4339");
});
