const User = require("../models/user");
const auth = require("../middleware/auth");
const ErrorResponse = require("../utils/errorResponse");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const nodemailer = require("nodemailer");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        error: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        error: "Invalid credentials",
      });
    }
    const payload = {
      user: { _id: user._id, name: user.username },
    };

    user.password = undefined;

    jwt.sign(payload, process.env.JWT_SECRET, {}, (error, token) => {
      if (error) throw error;
      res.json({
        token,
        user,
      });
    });
  } catch (err) {
    next(err);
  }
};

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await new User({
      username,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    const payload = {
      user: { _id: user._id, name: user.username },
    };

    user.password = undefined;

    jwt.sign(payload, process.env.JWT_SECRET, {}, (error, token) => {
      if (error) throw error;
      res.json({
        token,
        user,
      });
    });
  } catch (err) {
    next(err);
  }
};

exports.updateProfile = async (req, res) => {
  const id = req.user._id;
  const user = await User.findById({ _id: id });

  async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    return password;
  }

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = await hashPassword(req.body.password);
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      // token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
};

// exports.forgetPassword = async (req, res) => {
//   const { email } = req.body;
//   try {
//     if (email) {
//       const user = await auth.findOne({ email: email });
//       if (user) {
//         // generate token
//         const secretKey = user._id + "pleaseSubscribe";

//         const token = jwt.sign({ _id: user._id }, secretKey, {
//           expiresIn: "5m",
//         });

//         const link = `http://localhost:3000/user/reset/${user._id}/${token}`;

//         // email sending
//         const transport = nodemailer.createTransport({
//           service: "gmail",
//           host: "smtp.gmail.com",
//           port: 465,
//           auth: {
//             user: process.env.EMAIL,
//             pass: process.env.EMAIL_PASSWORD,
//           },
//         });

//         const mailOptions = {
//           from: process.env.EMAIL,
//           to: email,
//           subject: `Password Reset Request`,
//           text: `
// <!doctype html>
// <html lang="en-US">
// <head>
//   <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
//   <title>Reset Password Email Template</title>
//   <meta name="description" content="Reset Password Email Template.">
//   <style type="text/css">
//       a:hover {text-decoration: underline !important;}
//   </style>
// </head>

// <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
//   <!--100% body table-->
//   <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
//       style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
//       <tr>
//           <td>
//               <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
//                   align="center" cellpadding="0" cellspacing="0">

//                   <tr>
//                       <td>
//                           <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
//                               style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
//                               <tr>
//                                   <td style="height:40px;">&nbsp;</td>
//                               </tr>
//                               <tr>
//                                   <td style="padding:0 35px;">
//                                       <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have
//                                           requested to reset your password</h1>
//                                       <span
//                                           style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
//                                       <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
//                                           We cannot simply send you your old password. A unique link to reset your
//                                           password has been generated for you. To reset your password, click the
//                                           following link and follow the instructions.
//                                       </p>
//                                       <a href=${link}
//                                           style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reset
//                                           Password</a>
//                                   </td>
//                               </tr>
//                               <tr>
//                                   <td style="height:40px;">&nbsp;</td>
//                               </tr>
//                           </table>
//                       </td>

//               </table>
//           </td>
//       </tr>
//   </table>
//   <!--/100% body table-->
// </body>
// </html>`,
//           html: `
// <!doctype html>
// <html lang="en-US">
// <head>
//   <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
//   <title>Reset Password Email Template</title>
//   <meta name="description" content="Reset Password Email Template.">
//   <style type="text/css">
//       a:hover {text-decoration: underline !important;}
//   </style>
// </head>
// <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
//   <!--100% body table-->
//   <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
//       style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
//       <tr>
//           <td>
//               <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
//                   align="center" cellpadding="0" cellspacing="0">

//                   <tr>
//                       <td>
//                           <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
//                               style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
//                               <tr>
//                                   <td style="height:40px;">&nbsp;</td>
//                               </tr>
//                               <tr>
//                                   <td style="padding:0 35px;">
//                                       <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have
//                                           requested to reset your password</h1>
//                                       <span
//                                           style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
//                                       <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
//                                           We cannot simply send you your old password. A unique link to reset your
//                                           password has been generated for you. To reset your password, click the
//                                           following link and follow the instructions.
//                                       </p>
//                                       <a href="${link}"
//                                           style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reset
//                                           Password</a>
//                                   </td>
//                               </tr>
//                               <tr>
//                                   <td style="height:40px;">&nbsp;</td>
//                               </tr>
//                           </table>
//                       </td>

//               </table>
//           </td>
//       </tr>
//   </table>
//   <!--/100% body table-->
// </body>
// </html>`,
//         };

//         transport.sendMail(mailOptions, (error, info) => {
//           if (error) {
//             return res.status(400).json({ message: "Error" });
//           }
//           return res.status(200).json({ message: "Email Sent" });
//         });
//       } else {
//         return res.status(400).json({ message: "Invalid Email" });
//       }
//     } else {
//       return res.status(400).json({ message: "email is required" });
//     }
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// };

// exports.forgetPasswordEmail = async (req, res) => {
//   const { newPassword, confirmPassword } = req.body;
//   const { id, token } = req.params;

//   try {
//     if (newPassword && confirmPassword && id && token) {
//       if (newPassword === confirmPassword) {
//         // token verifiying
//         const user = await auth.findById(id);
//         const secretKey = user._id + "pleaseSubscribe";
//         const isValid = await jwt.verify(token, secretKey);
//         if (isValid) {
//           // password hashing

//           const genSalt = await bcryptjs.genSalt(10);
//           const hashedPass = await bcryptjs.hash(newPassword, genSalt);

//           const isSuccess = await auth.findByIdAndUpdate(user._id, {
//             $set: {
//               password: hashedPass,
//             },
//           });

//           if (isSuccess) {
//             return res.status(200).json({
//               message: "Password Changed Successfully",
//             });
//           }
//         } else {
//           return res.status(400).json({
//             message: "Link has been Expired",
//           });
//         }
//       } else {
//         return res
//           .status(400)
//           .json({ message: "password and confirm password does not match" });
//       }
//     } else {
//       return res.status(400).json({ message: "All fields are required" });
//     }
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// };

// exports.saveVerifiedEmail = async (req, res) => {
//   const { token } = req.params;
//   try {
//     if (token) {
//       // token verify
//       const secretKey = "welcomeToCodeWithviju";
//       const isEmailVerified = await jwt.verify(token, secretKey);
//       if (isEmailVerified) {
//         const getUser = await auth.findOne({
//           email: isEmailVerified.email,
//         });

//         const saveEmail = await auth.findByIdAndUpdate(getUser._id, {
//           $set: {
//             isVerified: true,
//           },
//         });

//         if (saveEmail) {
//           return res
//             .status(200)
//             .json({ message: "Email Verification Success" });
//         }
//       } else {
//         return res.status(400).json({ message: "Link Expired" });
//       }
//     } else {
//       return res.status(400).json({ message: "Invalid URL" });
//     }
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// };

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ success: true, token });
};
