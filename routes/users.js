var express = require('express');
var router = express.Router();
var user = require('../Models/userModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
    user.find((err,users)=>{
    res.json(users);
  });

});
// router.get('/_id',function(req, res, next){
//   user.findOne((err,user)=>{
//     res.json(user);
//   });
// })
router.post('/sendData',function(req, res, next){
  // let obj = user.create(req.body);
  // res.json({success:true});

  let userObj = user.create(req.body,function(err,user){
    res.json(user);
  })

  // let obj = new user(req.body);
  // obj.save(function(err,user){
  //   res.json({success:true, data: user})
  // });  
})
module.exports = router;
