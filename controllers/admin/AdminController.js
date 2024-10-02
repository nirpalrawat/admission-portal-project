const UserModel = require('../../models/user')

class AdminController {
    static dashboard =async(req,res)=>{
        try{
            res.render("admin/dashboard")

        }catch(error)
        {
            console.log(error)
        }
    }
    static studendtDisplay =async(req,res)=>{
        try{
            const data = await UserModel.find()
           // console.log (data)
            res.render("admin/studentDisplay" , {d:data})

        }catch(error)
        {
            console.log(error)
        }
    }
}

module.exports= AdminController