const express = require("express")
const router = express.Router()
const {productGet, productGetById, addProduct, updateProduct, deleteProduct} = require("../controllers/productController")

router.get("/", productGet);
router.get("/:id", productGetById)
router.post("/post", addProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

module.exports = router;