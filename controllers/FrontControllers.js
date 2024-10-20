const UserModel = require("../models/user");
const bcrypt = require("bcrypt");

const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "diezdjotw",
  api_key: "241161176572584",
  api_secret: "1lablZJiel1I80vG8BR5dvNmLCE",
});

//npm i bcrypt

class FrontController {
  static home = async (req, res) => {
    try {
      res.render("home");
    } catch (error) {
      console.log(error);
    }
  };

  static about = async (req, res) => {
    try {
      res.render("about");
    } catch (error) {
      console.log(error);
    }
  };

  static login = async (req, res) => {
    try {
      res.render("login", { message: req.flash("success") });
    } catch (error) {
      console.log(error);
    }
  };
  static register = async (req, res) => {
    try {
      res.render("register", { message: req.flash("error") });
    } catch (error) {
      console.log(error);
    }
  };

  static contact = async (req, res) => {
    try {
      res.render("contact");
    } catch (error) {
      console.log(error);
    }
  };
  static insertstudent = async (req, res) => {
    try {
      const { name, email, password, confirmpassword } = req.body;
      if (!name || !email || !password || !confirmpassword) {
        res.flash("error", "All Filds are Require.");
        return res.redirect("/register");
      }

      const isEmail = await UserModel.findOne({ email });
      //console.log(isEmail)
      if (isEmail) {
        req.flash("error", "Email Already Exists");
        return res.redirect("/register");
      }
      if (password != confirmpassword) {
        req.flash("error", "password does not match");
        return res.redirect("/register");
      }

      
      //console.log(req.files);
       // image Upload
      const file = req.files.image;
    
      const imageUpload = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "userprofile",
      });
      console.log(imageUpload);

      const hashpassword = await bcrypt.hash(password, 10);
      const data = await UserModel.create({
        name,
        email,
        password: hashpassword,
        image: {
          public_id: imageUpload.public_id,
          url: imageUpload.secure_url,
        },
      });
      req.flash("success", "register success ! plz Login");
      res.redirect("/"); //route web
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = FrontController;
