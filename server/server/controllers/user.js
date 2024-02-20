const userModel = require("../models/user");

// get single user profile
const getUserData = async (req, res) => {
   const { id } = req.params;
   
   try {
   const userInfo = await userModel.findById(id);

   if (!userInfo) {
    res.status(404).json({ message: "user not found"})
   };

   res.status(200).json(userInfo);
   
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}; 

// Add user profile information
const addUserData = async (req, res) => {
     const newUserData = req.body;

     try {
      const user = await userModel.findOne({ email: req.body.email });

      if(!user) {
        const newUser = await userModel.create(newUserData);
        return res.status(201).json(newUser);

      } else {
        return res.status(400).json({ message: "user already exists"});
      };

     } catch (err) {
      res.status(400).json({ message: err.message });
    };
};

// Update user profile information
const updateUserData = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUserInfo = await userModel.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (!updatedUserInfo) {
      res.status(422).json({
        message: "The data not updated",
      });

    } else {
      res.json(updatedUserInfo);
    };

  } catch (err) {
    res.status(422).json({ message: err.message });
  };
};

//for test
const getData = async (_, res) => {
  try {
    const users = await userModel.find({}).select("+password");
    res.status(200).json(users);

  } catch (err) {
    res.status(404).json({ message: err.message });
  };
};

module.exports = {getUserData,
                  addUserData,
                  updateUserData,
                  getData};
                                                                                     