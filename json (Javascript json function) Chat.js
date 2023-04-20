(function() {
  var app = angular.module('chatApp', []);

  app.controller('MessageCtrl', function($scope) {
    $scope.messages = [{
      Name: 'chatBot1',
      Message: "The only failure is not to try"
    }, {
      Name: 'ChatBot2',
      Message: "welcome to User interface with AI."
    }, {
      Name: 'ChhatBotGlitch3',
      Message: "Whats it like out of the box? It could all go away."
    }];
  });

})();
