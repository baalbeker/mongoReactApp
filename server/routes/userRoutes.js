import express from 'express';
import User from '../schemas/UserSchema.js';

const userRoutes = express.Router();

userRoutes.post("/", async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });

  try {
    await user.save();
    res.send('User Added');
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving user");
  }
});

userRoutes.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error fetching users');
  }
});

export default userRoutes;