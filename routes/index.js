const express = require("express");
const router = express.Router();
 let user = {
 	username: "Will",
 	password: "password"

 };
 let obj;

router.get("/", function (req, res){
	if(!req.session.token){
		res.redirect("/login");
	}else{
	res.render("results", obj);
}
});
router.get("/login", function(req, res){
	res.render("login")

});
router.post("/",function(req, res){
	req.checkBody("username", "Name cannot be empty.").notEmpty();
	req.checkBody("password", "password cannot be empty.").notEmpty();
	req.checkBody("username", "name too long").isLength({max: 25});
	req.checkBody("password", "password too short").isLength({min: 8});
	req.checkBody("username", "name too long").isLength({min: 8});
	

obj = {
    username: req.body.username,
    password: req.body.password
  };
  req.session.token = "afs29628";
  
   if (obj.username == user.username && obj.password == user.password) {
    req.session.user = obj;
    req.session.token = "afs29628";
    res.redirect("/");
  } else {
    res.redirect("/login");
  }
});
module.exports = router;