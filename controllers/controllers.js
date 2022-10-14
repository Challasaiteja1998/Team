const category = require('../models/models');
exports.findById = function(req, res) {
    category.findById(req.params.id, function(err, category) {
      console.log('err')
      if (err)
      res.send(err);
      console.log('res', category);
      res.send(category);
    });
    };

    exports.findAll = function(req, res) {
        category.findAll(function(err, category) {
          console.log('err')
          if (err)
          res.send(err);
          console.log('res', category);
          res.send(category);
        });
        };
        