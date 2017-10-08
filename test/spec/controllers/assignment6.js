'use strict';

describe('Controller: Assignment6Ctrl', function () {

  // load the controller's module
  beforeEach(module('otroFidelApp'));

  var Assignment6Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Assignment6Ctrl = $controller('Assignment6Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Assignment6Ctrl.awesomeThings.length).toBe(3);
  });
});
