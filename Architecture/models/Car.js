const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    mark: { type: String, required: true},
    model: { type: String, required: true },
    image: { type: String, required:true },
    year: { type: Number,required:true },
    rented:{type:Boolean,required:true,default:false},
    creationDate: {type: Date, required:true},
    pricePerDay:{type:Number,required:true}
});

const Car = mongoose.model('Car',carSchema);

module.exports = Car;