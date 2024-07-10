const User = require("../models/userModel");

const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'You must provide a name, email and password' });
    }

    try {
        const user = new User({
            username,
            email,
            password
        });

        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Server error while creating user' });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'You must provide an email and password' });
    }

    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Server error while logging in' });
    }
}

module.exports = { createUser, loginUser }