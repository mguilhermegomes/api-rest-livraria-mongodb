// import express from "express";
import livrosRoutes from "./livrosRoutes.js";
import autorRoutes from "./autorRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("OK");
  });

  app.use("/livros", livrosRoutes);
  app.use("/autores", autorRoutes);
};

export default routes;