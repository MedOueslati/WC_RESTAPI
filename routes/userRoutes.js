const express = require("express")
const router = express.Router()
const {getUser,addnewUser,updateUser,deleteUser} = require("../controllers/userController")


router.get("/" , getUser)
router.post("/post" , addnewUser )
router.put("/put/:id" , updateUser )
router.delete("/delete/:id" , deleteUser )

module.exports = router

