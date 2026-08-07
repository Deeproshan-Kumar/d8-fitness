import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/user.model";

// +++++++++++ User registration +++++++++++
// @route POST /api/auth/register
// @desc Register a new user
// @access Public
const registerUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ firstName, lastName, email, password: hashedPassword });
        await newUser.save();
        return res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// +++++++++++ User login +++++++++++
// @route POST /api/auth/login
// @desc Login an existing user
// @access Public
const loginUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        return res.status(200).json({ message: "User logged in successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// +++++++++++ User logout +++++++++++
// @route POST /api/auth/logout
// @desc Logout an existing user
// @access Public
const logoutUser = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

// +++++++++++ Get current user +++++++++++
// @route GET /api/auth/current-user
// @desc Get current user details
// @access Private
const getCurrentUser = async (req: Request, res: Response) => {
    try {
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// +++++++++++ Update profile +++++++++++
// @route PUT /api/auth/update-profile
// @desc Update user profile
// @access Private
const updateProfile = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// +++++++++++ Forgot password +++++++++++
// @route POST /api/auth/forgot-password
// @desc Forgot password
// @access Private
const forgotPassword = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        console.log(error);
        return res.json({ message: "Internal server error" });
    }
}

// +++++++++++ Reset password +++++++++++
// @route PUT /api/auth/reset-password
// @desc Reset user password
// @access Private
const resetPassword = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        console.log(error);
        return res.json({ message: "Internal server error" });
    }

}

// +++++++++++ Change password +++++++++++
// @route PUT /api/auth/change-password
// @desc Change user password
// @access Private
const changePassword = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        console.log(error);
        return res.json({ message: "Internal server error" });
    }

}

export { registerUser, loginUser, logoutUser, getCurrentUser, updateProfile, forgotPassword, resetPassword, changePassword };