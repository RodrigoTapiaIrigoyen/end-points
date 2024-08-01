const express = require("express");

const router = express.Router();


router.use((request,response, next )=>{
  console.log("middleware de router koders");
  next();
  
}) 

router.get("/", (request, response) => {
  response.json({ message: "GET koders" });
},(request,response)=>{
  response.json({ message: "get koders"});
});

router.post("/", (request, response) => {
  response.json({ message: "post koders" });
});


router.delete("/:name", (request, response) => {
  response.json({ message: "delete koders" });
});


router.get("/:name/attendance", (request, response) => {
  response.json({ message: "get attendance koders" });
});


module.exports = router;
