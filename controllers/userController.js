const User = require("../models/UserSchema")

//@POST METHOD
const addnewUser = async (req, res) => {
    try {
        const newUser = new User(req.body); 
        await newUser.save();
        res.status(200).json({ msg: "user Added", newUser: newUser })
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

//@GET METHOD
const getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ msg: "Users retrieved successfully", users: users })
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
};

//@UPDATE METHOD
const updateUser = async (req, res) => {
    try {
        const userId = req.params.userId
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true })
        res.status(200).json({ msg: "User updated successfully", user: updatedUser })
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
};

//@DELETE METHOD
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId
        const deletedUser = await User.findByIdAndDelete(userId)
        res.status(200).json({ msg: "User deleted successfully", user: deletedUser })
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

module.exports= {addnewUser,getUser,updateUser,deleteUser}
