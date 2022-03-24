const mongoose = require("mongoose")

const subscriberSchema = new mongoose.Schema({
    CompanyName:{
        type:String,
        required:true
    },
    CEOName:{
        type:String,
        required:true
    },
    Managers:{
        type:Array,
        required:true
    },
    netWorth:{
        type:Number,
        required:false
    },
    Products:{
        type:Array,
        required:true
    },
    profitByYear:{
        type:Object,
        required:false,
    }
})


module.exports = mongoose.model("Subscriber", subscriberSchema)