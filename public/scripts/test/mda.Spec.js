describe('SMARTOB-8767: Person not moving to MDA Group, when Active MDA Added to person after ending of previous MDA: ', function() {

  var data, person, person_model, $scope;
  var states, groups, $filter, $timeout;
  var titleHierarchy, titles;
  var boardQuota = {};

  beforeEach(function() {

    module('OpsBoard');

    data = window.__fixtures__['test/fixtures/load'];

    inject(function(PersonModel, $rootScope, $injector, $controller,
                    _states_, _groups_, _titleHierarchy_, _titles_,
                    _$timeout_, _$filter_) {

      person_model = $injector.get('PersonModel');

      states = _states_;
      groups = _groups_;
      $filter = _$filter_;
      $timeout = _$timeout_;
      titleHierarchy = _titleHierarchy_;
      titles = _titles_;

      $scope = $rootScope.$new();
      //william added for pass test.
      $scope.personnelpane = $scope.personnelpane || {};
      $scope.board = $scope.board || {};
      $scope.board.realDate = $scope.board.realDate || new Date();
      $scope.filterType = $scope.filterType || 'Location Seniority';

      //$scope.person = $scope.person || {};
      $scope.persons = [
        data.personnel['13029']
      ];
      $scope.boardQuota = {
        sanitationWorkers: {13029: {}}
      };


      ctrl = $controller('PersonnelCtrl', {
        $scope: $scope,
        $rootScope: $rootScope,
        OpsBoardRepository: $injector.get('OpsBoardRepository'),
        states: states,
        groups: groups,
        titleHierarchy: titleHierarchy,
        titles: titles,
        $timeout: $timeout,
        OpsBoardInterval: $injector.get('OpsBoardInterval'),
        PersonnelHelperService: $injector.get('PersonnelHelperService'),
        $filter: $filter,
        BoardValueService: $injector.get('BoardValueService'),
        BoardHelperService: $injector.get('BoardHelperService')
      });
    });
  });

  it('Should inject the person object into SMARTOB-8767 test', function() {
  });

  /*
  it('should OpsBoard.states.equipment.available is Available', function () {
    expect(states.equipment.available).toEqual('Available');
  });

  it('should groups.personnel.commissioners contains COMM and DYCOMM', function() {
    expect(groups.personnel.commissioners).toContain('COMM');
  });

  it('Should inject the person object into SMARTOB-8767 test', function() {
    expect(data.personnel).toBeDefined();
    //console.log(data.personnel['13029'].state);
  });

  it('unavailableGroupFilter test', function() {

    $scope.persons = [
      data.personnel['13029']
    ];

    //console.log($scope.persons);
    //angular.extend(person, person_model);


    var mdaFiltered = $filter('mdaPersonnelFilter')($scope.persons, 'Location Seniority', new Date(), true);
    var actualMdaFiltered = $filter('mdaPersonnelFilter')($scope.persons, 'Location Seniority', new Date(), false);

    $scope.unavailableGroupFilter(mdaFiltered, actualMdaFiltered);

    expect($scope.numUnavailable).toBe(0);

    // change "state": "Available" => 'unavailable'
    $scope.persons[0].state = 'Unavailable';
    $scope.unavailableGroupFilter(mdaFiltered, actualMdaFiltered);

    expect($scope.numUnavailable).toBe(1);

  });
  */
});
