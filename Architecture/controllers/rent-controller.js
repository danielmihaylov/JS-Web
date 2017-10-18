const Car = require('mongoose').model('Car');
const User = require('mongoose').model('User');
const KeyChain = require('mongoose').model('KeyChain');

module.exports = {
    getRentDetails: (req, res) => {
        let id = req.params.id;
        Car.findById(id).then((car) => {
            res.render('rent/rentCar', { car });
        })
    },
    rentCar: (req, res) => {
        //carID
        let id = req.params.id;
        let userId = req.user.id;

        let days = Number(req.body.days);

        Car.findById(id).then(car => {
            car.rented = true
            car.save().then(() => {
                User.findById(userId).then(user => {

                    let keyObject = {
                        car: car._id,
                        renter: user._id,
                        rentDate: Date.now(),
                        days: days
                    }
                    KeyChain.create(keyObject).then(() => {
                        res.redirect('/');
                    })
                })
            })
        })
    }
};