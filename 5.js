const fs = require('fs');

fs.mkdir("./employee",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("folder created...")
    }
})

fs.appendFile('./employee.txt',"Anish,nishchavan07@gmailcom,120000,IT",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file appended...")
    }
})