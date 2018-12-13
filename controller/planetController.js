// Import planet model
Planet = require('../model/planetModel');
// Handle index actions
exports.index = function (req, res) {
    Planet.get(function (err, planets) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: planets.length + " planets retrieved successfully",
            data: planets
        });
    });
};
// Handle create planet actions
exports.new = function (req, res) {
    var planet = new Planet();
    planet.name = req.body.name ? req.body.name : planet.name;
    planet.climate = req.body.climate;
    planet.terrain = req.body.terrain;
    planet.films = req.body.films;

    for(var key in req.body.films) {
        if(req.body.hasOwnProperty(key)){
            planet.films.save = req.body.films[key];
        }
    }

    console.log(res);   
    
    
    // save the planet and check for errors
    planet.save(function (err) {
        if (err) {
            res.json(err); 
        } else {
            res.json({
                message: 'New planet created!',
                data: planet
            });
        }   
    });
};
// Handle view planet info
exports.view = function (req, res) {
    if (req.params._id)
    {
        Planet.findById(req.params._id, function (err, planet) {
            if (err)
                res.send(err);
            res.json({
                message: 'Planet details loading..', 
                apparitions: planet.films.length, 
                data: planet
            });
        });
    }
    if (req.params._name)
    {
        Planet.find({name: req.params._name}, function (err, planet) {
            if (err)
                res.send(err);
            res.json({
                message: 'Planet details loading..', 
                data: planet
            });
        });
    }
};


// Handle update planet info
exports.update = function (req, res) {
    Planet.findById(req.params._id, function (err, planet) {
        if (err)
            res.send(err);
        planet.name = req.body.name ? req.body.name : planet.name;
        planet.climate = req.body.climate;
        planet.terrain = req.body.terrain;
        planet.films = req.body.films;

        // save the planet and check for errors
        planet.save(function (err) {
            /*if (err)
                res.json(err);*/
            res.json({
                message: 'Planet Info updated',
                data: planet
            });
        });
    });
};
// Handle delete planet
exports.delete = function (req, res) {
    Planet.remove({
        _id: req.params._id
    }, function (err, planet) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Planet deleted'
        });
    });
};