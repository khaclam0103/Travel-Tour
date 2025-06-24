import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//user registration
export const register = async (req, res) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        });
        await newUser.save();
        res.status(200).json({ success: true, message: "Đăng ký thành công" });
    }catch(err) {
        res
            .status(500)
            .json({ success: false, message: "Đăng ký thất bại" });
    }
};

// user login
export const login = async (req, res) => {
    const email = req.body.email;
    try{
        const user = await User.findOne({ email })
        if(!user) {
            return res.status(404).json({ success: false, message: "Người dùng không tồn tại" });
        }
        const checkCorrectPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if(!checkCorrectPassword) {
            return res.status(401).json({ success: false, message: "Email hoặc mật khẩu không chính xác" });
        }

        const { password, role, ...rest } = user._doc;

        const token = jwt.sign(
            { id: user._id, role: user.role }, 
            process.env.JWT_SECRET_KEY, 
            { expiresIn: "15d" }
        );

        res.cookie("access_token", token, {
            httpOnly: true,
            expires: token.expiresIn
        })
        .status(200)
        .json({
            token,
            // success: true,
            // message: "Đăng nhập thành công",
            data: { ...rest},
            role,
        });
    } catch (err) {
        res.status(500).json({ 
            success: false, 
            message: "Đăng nhập thất bại" 
        });
    }
}