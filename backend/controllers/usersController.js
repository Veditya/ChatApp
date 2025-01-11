import User from "../model/userModel.js";

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedUserId },
    }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("error in getUserForSidebar controller", error.message);
    res.status(500).json({ message: "internal server error" });
  }
};

export default getUsersForSidebar;
