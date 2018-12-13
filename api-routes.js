// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import contact controller
var planetController = require('./controller/planetController');
// Contact routes
router.route('/planets')
    .get(planetController.index)
    .post(planetController.new);
router.route('/planets/:_id')
    .get(planetController.view)
    .patch(planetController.update)
    .put(planetController.update)
    .delete(planetController.delete);
router.route('/planets/name/:_name') 
    .get(planetController.view);
// Export API routes
module.exports = router;