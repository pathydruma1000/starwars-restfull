var mongoose = require('mongoose');
// Setup schema
var planetSchema = mongoose.Schema({
    name: String,
    climate: String,
    terrain: String,
    films: [String],
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Planet model 
var Planet = module.exports = mongoose.model('planet', planetSchema);
module.exports.get = function (callback, limit) {
    Planet.find(callback).limit(limit);
}