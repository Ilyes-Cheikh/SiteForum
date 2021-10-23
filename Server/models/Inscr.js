const mongoose = require("mongoose")

const Schema = mongoose.Schema

const inscrSchema = new Schema({
    Nom   : {type:String,required:true},
    Prenom : {type:String,required:true},
    Email : {type:String,required:true},
    Birthday:{type: Date , required:true},
    Status: {type: String, required:true},
    Universite: {type: String, required:false},
    Classe: {type: Number, required:false},
    Vaccine: {type: Boolean, required:true},
    Partage: {type: Boolean, required:true},

    CV: {type: String, required:false},
    

},{timestamps : true})


const Inscr = mongoose.model('inscr',inscrSchema)
module.exports = Inscr