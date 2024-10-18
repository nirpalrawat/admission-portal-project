const UserModel = require("../models/user");
//const TeacherModel
const bcrypt = require("bcrypt")
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
      res.render("login" ,{message: req.flash("success")}) ;
    } catch (error) {
      console.log(error);
    }
  };
  static register = async (req, res) => {
    try {
      res.render("register", {message: req.flash("error")});
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
      //console.log(req.body)
      // const { name, email, password, confirmpassword } = req.body;
      // const data = await UserModel.create({
      //   name,
      //   email,
      //   password,
      //});
      //res.redirect("/"); //route path

      const { name, email, password, confirmpassword } = req.body;
      if ( !name || !email || !password || !confirmpassword){
        req.flash("error" , "All Fields Are Required")
      return res.redirect("/register")
      }

      const isEmail = await UserModel.findOne({email})
      //console.log(isEmail)
      if(isEmail){
        req.flash("error" , "Email Alredy Exists")
      return res.redirect("/register")
      
      }
      if (password != confirmpassword){
        req.flash("error" , "password does not match")
        return res.redirect("/register")
      }
      //console.log(req.files)


      const hashpassword = await bcrypt.hash(password,10)
      const data = await UserModel.create({
        name,
        email,
        password: hashpassword
      })
      req.flash("success", "register success ! plz Login")
      res.redirect('/'); //route web 
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = FrontController;
