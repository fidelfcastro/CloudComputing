'use strict';

describe('Controller: Assignment7Ctrl', function () {

  // load the controller's module
  beforeEach(module('otroFidelApp'));

  var Assignment7Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Assignment7Ctrl = $controller('Assignment7Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Assignment7Ctrl.awesomeThings.length).toBe(3);
  });
});
