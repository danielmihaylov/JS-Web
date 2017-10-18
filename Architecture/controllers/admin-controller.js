const Car = require('mongoose').model('Car');

module.exports = {
    addCarView: (req, res) => {
        res.render('adminPanel/createCarView');  
    },
    createCar:(req,res) => {
        //returns everything what is given from the form
        let carData = req.body;

        let objectForCreation = {
            mark: carData.mark,
            model: carData.model,
            image: carData.image,
            year:carData.year,
            creationDate: Date.now(),
            pricePerDay: carData.pricePerDay
        }
        Car.create(objectForCreation).then(() => {
            res.redirect('/');
        })
    }
};