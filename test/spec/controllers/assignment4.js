'use strict';

describe('Controller: Assignment4Ctrl', function () {

  // load the controller's module
  beforeEach(module('otroFidelApp'));

  var Assignment4Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Assignment4Ctrl = $controller('Assignment4Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Assignment4Ctrl.awesomeThings.length).toBe(3);
  });
});
