const mongoose = require('mongoose');
const { connectDB } = require('./db');
connectDB()

const empSchema=mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    department:{
        type:String,
        enum:["HR","IT","SALES","FINANCE","MARKETING"],
        required:true
    },

    age:{
        type:Number,
        min:18,
        max:60,
        required:true
    },

    city:{
        type:String,
        required:true

    },

    salary:{
        type:Number,
        min:10000,
        max:50000,
        required:true
    },

    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

const empModel=mongoose.Model("emp",empSchema);

async function displayData(){
    try {
        const data=await empModel.find()
        console.log(data)
        
    } catch (error) {
        console.log(error)
        
    }
}
//displayData()

async function insertData(ename,eemail,edept,eage,ecity,esal,eactive){
    try {
        await empModel.create({name:ename,email:eemail,department:edept,age:eage,city:ecity,salary:esal,isActive:eactive})
        console.log("inserted.....")
        displayData()
        
    } catch (error) {
        console.log(error)
        
    }
}

insertData("Anish","nishchavan07@gmail.com","IT",24,"Mumbai",49000,true)

async function updateData(){
    try {
        await empModel.updateOne({name:"Anish"},{$set:{salary:30000}})
        console.log("updated...")
        
    } catch (error) {
        console.log(error)
        
    }
}
updateData()


async function insertData(ename,eemail,edept,eage,ecity,esal,eactive){
    try {
        await empModel.create({name:ename,email:eemail,department:edept,age:eage,city:ecity,salary:esal,isActive:eactive})
        console.log("inserted.....")
        displayData()
        
    } catch (error) {
        console.log(error)
        
    }
}

insertData("Tisha","It",23,"Mumbai",49000,true)


async function insertData(ename,eemail,edept,eage,ecity,esal,eactive){
    try {
        await empModel.create({name:ename,email:eemail,department:edept,age:eage,city:ecity,salary:esal,isActive:eactive})
        console.log("inserted.....")
        displayData()
        
    } catch (error) {
        console.log(error)
        
    }
}

insertData("Tisha","nishchavan07@gmail.com","It",23,"Mumbai",49000,true)

async function updateData(){
    try {
        await empModel.updateOne({name:"Anish"},{$set:{age:15}})
        console.log("updated...")
        
    } catch (error) {
        console.log(error)
        
    }
}
updateData()













