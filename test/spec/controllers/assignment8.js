'use strict';

describe('Controller: Assignment8Ctrl', function () {

  // load the controller's module
  beforeEach(module('otroFidelApp'));

  var Assignment8Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Assignment8Ctrl = $controller('Assignment8Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Assignment8Ctrl.awesomeThings.length).toBe(3);
  });
});
