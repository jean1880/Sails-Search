/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  search: function(req, res) {
    var $scope = {};
    $scope.model = 'Test'; // set associated model name here
    $scope.params = req.params.all();
    $scope.data = {};

    // Loop through parameters and collect passed search requests that contain valid data
    for (param in $scope.params) {
      if ($scope.params[param]) {
        try {
          $scope.data[param] = JSON.parse($scope.params[param]);
        } catch (err) {
          $scope.data[param] = $scope.params[param];
        }
      }
    }

    // build exection string which will populate nested models
    $scope.execution = $scope.model + '.find($scope.data)';
    for (attr in eval($scope.model).attributes) {
      if (eval($scope.model).attributes[attr].model != null) {
        $scope.execution += '.populate("' + attr + '")';
      }
    }

    // execute created function collection and return result set back through system results
    eval($scope.execution).exec(function(err, result) {
      if (!err) {
        res.send(result);
      } else {
        res.send(404, {
          error: 'No Results',
          request: $scope.data,
          result: result
        })
      }
    });
  }
};
