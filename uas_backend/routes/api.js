// import Student Controller
const NewsController = require("../controllers/NewsController");

// import express
const express = require("express");

// make an object router
const router = express.Router();

// make home routing
router.get("/", (req, res) => {
    res.send("Hello Fauzi");
});

// Routing for Students
router.get("/news", NewsController.index);
router.post("/news", NewsController.store);
router.put("/news/:id", NewsController.update);
router.delete("/news/:id", NewsController.destroy);
router.get("/news/:id", NewsController.show);
router.get("/news/search/:title", NewsController.search);
router.get("/news/category/:category", NewsController.findByCategory);

// export routing
module.exports = router;