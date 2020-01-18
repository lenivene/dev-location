const { Router } = require("express");

const DevCtrl = require("./controllers/DevCtrl");
const SearchCtrl = require("./controllers/SearchCtrl");

const routes = Router();

routes.get("/devs", DevCtrl.index);
routes.post("/devs", DevCtrl.store);

// Search
routes.get("/search", SearchCtrl.index);

module.exports = routes;
