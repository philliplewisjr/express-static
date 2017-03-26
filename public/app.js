const express = require("express");
const app = express();

app.use(express.static("public"));

app.get('/', (res, req)=>{
  res.send()
});

app.listen(3000, ()=> {
  console.log("Listening on 3000")
});
