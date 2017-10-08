'use strict';

describe('Controller: Assignment5Ctrl', function () {

  // load the controller's module
  beforeEach(module('otroFidelApp'));

  var Assignment5Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Assignment5Ctrl = $controller('Assignment5Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Assignment5Ctrl.awesomeThings.length).toBe(3);
  });
});
