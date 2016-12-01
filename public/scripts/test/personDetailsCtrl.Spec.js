describe('OpsBoard Unit Test - PersonDetailsController: ', function() {

  var filter, groups, resource, ops_board_repository, states, board_data_service, board_helper_service;
  var PersonDetailsCtrl, $scope;
  var aPerson = {};

  beforeEach(angular.mock.module('OpsBoard'));

  beforeEach(angular.mock.inject(function($rootScope, $filter, _groups_, $resource, OpsBoardRepository,
                             _states_, BoardDataService, BoardHelperService,
                             $controller, $injector) {
    filter = $filter;
    groups = _groups_;
    resource = $resource;
    ops_board_repository = $injector.get('OpsBoardRepository');
    states = _states_;
    board_data_service = $injector.get('BoardDataService');
    board_helper_service = $injector.get('BoardHelperService');

    $scope = $rootScope.$new();
    $scope.person = $scope.person || {};
    $scope.boardQuota = $scope.boardQuota || {};
    $scope.boardQuota.sanitationWorkers = $scope.boardQuota.sanitationWorkers || {};

    PersonDetailsCtrl = $controller('PersonDetailsCtrl', {
      $scope: $scope,
      $filter: filter,
      groups: groups,
      $resource: resource,
      OpsBoardRepository: ops_board_repository,
      states: states,
      BoardDataService: board_data_service,
      BoardHelperService: board_helper_service
    });

    aPerson = window.__fixtures__['test/fixtures/person'];
  }));

  beforeEach(function() {
    angular.extend($scope.person, aPerson);
  });

  it('should have a PersonDetailsCtrl', function() {
    expect(PersonDetailsCtrl).toBeDefined();
  });

  it('Grounded should be defined', function () {
    expect($scope.grounded).toBeDefined();
  });

  it('person should be an object', function() {
    expect($scope.person).toBeDefined();
  });

  it('person state is Available', function() {
    expect($scope.person.state).toBe('Available');
  });
});
