'use strict';

describe('Controller: Assignment3Ctrl', function () {

  // load the controller's module
  beforeEach(module('otroFidelApp'));

  var Assignment3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Assignment3Ctrl = $controller('Assignment3Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Assignment3Ctrl.awesomeThings.length).toBe(3);
  });
});
